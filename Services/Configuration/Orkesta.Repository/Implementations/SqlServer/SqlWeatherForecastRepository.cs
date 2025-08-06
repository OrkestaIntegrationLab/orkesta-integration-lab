using AutoMapper;

using Newtonsoft.Json.Linq;

using Orkesta.Domain.Weather;
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
    public class SqlWeatherForecastRepository : IWeatherForecastRepository
    {
        private IMapper _mapper;
        private IConnector _connector;

        public SqlWeatherForecastRepository(IConnector connector, IMapper mapper)
        {
            _mapper = mapper;
            _connector = connector;
        }

        public List<WeatherForecast> GetWeatherList(WeatherForecastFilter filter)
        {
            //var daoFilter = _mapper.Map<WeatherForecastFilterDao>(filter);
            //var dataSet = _connector.GetJson("[Maestro].[spConsultarDispositivos]", JObject.FromObject(daoFilter));
            var dataSet = @"
[
  {
    ""Fecha"": ""2025-08-06"",
    ""TemperaturaC"": 28,
    ""TemperaturaF"": 82,
    ""Summary"": ""Soleado con brisa ligera""
  },
  {
    ""Fecha"": ""2025-08-07"",
    ""TemperaturaC"": 31,
    ""TemperaturaF"": 87,
    ""Summary"": ""Caluroso y húmedo""
  },
  {
    ""Fecha"": ""2025-08-08"",
    ""TemperaturaC"": 24,
    ""TemperaturaF"": 75,
    ""Summary"": ""Nublado con posibilidad de lluvia""
  }
]";

            var resultDao = JsonUtils.DeserializeObjectOrDefault(dataSet, new List<WeatherForecastDao>());
            var resultDoman = _mapper.Map<List<WeatherForecast>>(resultDao.ToList());
            return resultDoman;
        }
    }
}
