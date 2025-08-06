using AutoMapper;

using Orkesta.Domain.Weather;
using Orkesta.Repository.Dao.Weather;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.AutoMapper
{
    public class WeatherForecastRepositoryProfile : Profile
    {
        public WeatherForecastRepositoryProfile()
        {
            _ = CreateMap<WeatherForecastFilterDao, WeatherForecastFilter>().ReverseMap();
            _ = CreateMap<WeatherForecastDao, WeatherForecast>().ReverseMap();
        }
    }
}
