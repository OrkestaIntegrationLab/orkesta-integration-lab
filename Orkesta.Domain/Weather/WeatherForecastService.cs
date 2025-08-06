using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Weather
{
    public class WeatherForecastService : IWeatherForecastService
    {
        public IWeatherForecastRepository _weatherForecastRepository;
        public WeatherForecastService(IWeatherForecastRepository weatherForecastRepository)
        {
            _weatherForecastRepository = weatherForecastRepository;
        }

        public List<WeatherForecast> GetWeatherList(WeatherForecastFilter filter)
        {
            return _weatherForecastRepository.GetWeatherList(filter);
        }
    }
}
