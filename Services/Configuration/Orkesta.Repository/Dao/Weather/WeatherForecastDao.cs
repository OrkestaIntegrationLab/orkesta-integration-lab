using Newtonsoft.Json;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.Weather
{
    public class WeatherForecastDao
    {
        [JsonProperty("Fecha")]
        public DateOnly Date { get; set; }

        [JsonProperty("TemperaturaC")]
        public int TemperatureC { get; set; }

        [JsonProperty("TemperaturaF")]
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        [JsonProperty("Summary")]
        public string? Summary { get; set; }
    }
}
