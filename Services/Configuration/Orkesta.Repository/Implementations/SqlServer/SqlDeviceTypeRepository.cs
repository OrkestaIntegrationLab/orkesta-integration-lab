using AutoMapper;
using Newtonsoft.Json.Linq;
using Orkesta.Domain.DeviceType;
using Orkesta.Domain.Weather;
using Orkesta.Repository.Dao.DeviceType;
using Orkesta.Repository.Dao.Weather;
using Orkesta.Repository.Interfaces;
using Orkesta.Repository.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            var daoFilter = _mapper.Map<DeviceTypeFilterDao>(filter);
            var dataSet = _connector.GetJson("[Maestro].[spConsultarTiposDispositivos]", JObject.FromObject(daoFilter));
            var resultDao = JsonUtils.DeserializeObjectOrDefault(dataSet, new List<DeviceTypeDao>());
            var resultDoman = _mapper.Map<List<DeviceType>>(resultDao.ToList());
            return resultDoman;
        }
    }
}
