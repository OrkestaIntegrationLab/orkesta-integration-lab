using AutoMapper;
using Newtonsoft.Json.Linq;
using Orkesta.Domain.DeviceType;
using Orkesta.Repository.Dao.Common.Database;
using Orkesta.Repository.Dao.DeviceType;
using Orkesta.Repository.Interfaces;
using Orkesta.Repository.Utils;
using System.Data.SqlClient;

namespace Orkesta.Repository.Implementations.SqlServer
{
    public class SqlDeviceTypeRepository : IDeviceTypeRepository
    {
        private IMapper _mapper;
        private IConnector _connector;

        public SqlDeviceTypeRepository(IConnector connector, IMapper mapper)
        {
            _mapper = mapper;
            _connector = connector;
        }
        public List<DeviceType> GetDeviceTypeList(DeviceTypeFilter filter)
        {
            //MAPEO DOMAIN - DAO
            var daoFilter = _mapper.Map<DeviceTypeFilterDao>(filter);

            //LLAMADA SP A BASE DE DATOS
            var dataSet = _connector.GetJson("[Maestro].[spConsultarTiposDispositivos]", JObject.FromObject(daoFilter));

            //DESEREALIZACION DE LA DATA
            var resultDao = JsonUtils.DeserializeObjectOrDefault(dataSet, new List<DeviceTypeDao>());

            //dao a domain
            var resultDoman = _mapper.Map<List<DeviceType>>(resultDao.ToList());

            return resultDoman;
        }

        public long InsertDeviceType(DeviceType deviceType, long idUser)
        {
            var daoModel = _mapper.Map<DeviceTypeDao>(deviceType);

            var result = _connector.ExecuteWithJsonInput("[Maestro].[spActualizarTiposDispositivos]", daoModel, new List<SqlParameter>()
            {
                new SqlParameter("IdUsuario", idUser)
            });

            if (result.IdResponseCode != (int)DatabaseResult.ResponseCodes.Success)
            {
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.DuplicatedName)
                    return -1;
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.DuplicatedAbreviature)
                    return -2;
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.RecordDoesNotExist)
                    return -3;
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.GeneralError)
                    return -4;
            }

            return result.EntityId;
        }
    }
}
