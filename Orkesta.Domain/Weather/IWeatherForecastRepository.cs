using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Weather
{
    public interface IWeatherForecastRepository
    {
        List<WeatherForecast> GetWeatherList(WeatherForecastFilter filter);
    }
}
