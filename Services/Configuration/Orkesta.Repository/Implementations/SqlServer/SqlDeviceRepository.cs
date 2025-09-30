using AutoMapper;
using Newtonsoft.Json.Linq;
using Orkesta.Domain.Device;
using Orkesta.Domain.DeviceType;
using Orkesta.Repository.Dao.Common.Database;
using Orkesta.Repository.Dao.Device;
using Orkesta.Repository.Dao.DeviceType;
using Orkesta.Repository.Interfaces;
using Orkesta.Repository.Utils;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Implementations.SqlServer
{
    public class SqlDeviceRepository : IDeviceRepository
    {
        private IMapper _mapper;
        private IConnector _connector;

        public SqlDeviceRepository(IMapper mapper , IConnector connector)
        {
            _mapper = mapper;
            _connector = connector;
        }

        public List<Device> GetDeviceList(DeviceFilter filter)
        {
            var daoFilter = _mapper.Map<DeviceFilterDao>(filter);
          
            var dataSet = _connector.GetJson("[Maestro].[spConsultarDispositivos]", JObject.FromObject(daoFilter));

          
            var resultDao = JsonUtils.DeserializeObjectOrDefault(dataSet, new List<DeviceDao>());

            var resultDoman = _mapper.Map<List<Device>>(resultDao.ToList());

            return resultDoman;

        }

        public long InsertDevice(Device device, long idUser)
        {
            var daoModel = _mapper.Map<DeviceDao>(device);

            var result = _connector.ExecuteWithJsonInput("[Maestro].[spActualizarDispositivos]", daoModel, new List<SqlParameter>()
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
