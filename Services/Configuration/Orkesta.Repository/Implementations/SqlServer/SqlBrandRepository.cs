using AutoMapper;
using Newtonsoft.Json.Linq;
using Orkesta.Domain.Brand;
using Orkesta.Domain.DeviceType;
using Orkesta.Repository.Dao.Brand;
using Orkesta.Repository.Dao.Common.Database;
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
    public class SqlBrandRepository : IBrandRepository
    {
        private IMapper _mapper;
        private IConnector _connector;

        public SqlBrandRepository(IMapper mapper , IConnector connector)
        {
            _mapper = mapper;
            _connector = connector;
        }
        public List<Brand> GetBrandList(BrandFilter filter)
        {
            var daoFilter = _mapper.Map<BrandFilterDao>(filter);

            var dataSet = _connector.GetJson("[Maestro].[spConsultarMarcas]", JObject.FromObject(daoFilter));

            var resultDao = JsonUtils.DeserializeObjectOrDefault(dataSet, new List<BrandDao>());

            var resultDoman = _mapper.Map<List<Brand>>(resultDao.ToList());

            return resultDoman;
        }

        public long InsertBrand(Brand brand, long idUser)
        {
            var daoModel = _mapper.Map<BrandDao>(brand);

            var result = _connector.ExecuteWithJsonInput("[Maestro].[spActualizarMarcas]", daoModel, new List<SqlParameter>()
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
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.DuplicatedBrand)
                    return -5;
            }

            return result.EntityId;
        }
    }
}
