using AutoMapper;

using Orkesta.API.ViewModels;
using Orkesta.Domain.Weather;

namespace Orkesta.API.AutoMapper
{
    public class WeatherForecastProfile : Profile
    {
        public WeatherForecastProfile()
        {
            _ = CreateMap<WeatherForecastFilterViewModel, WeatherForecastFilter>().ReverseMap();
            _ = CreateMap<WeatherForecastViewModel, WeatherForecast>().ReverseMap();
        }
    }
}
