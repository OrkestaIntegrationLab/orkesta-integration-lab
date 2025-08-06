using AutoMapper;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Orkesta.API.ViewModels;
using Orkesta.Domain.Weather;

using System.Net;

namespace Orkesta.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly ILogger<WeatherForecastController> _logger;

        /// <summary>
        /// Llamadada al servicio  para consultar y actualizar data.
        /// </summary>
        private readonly IWeatherForecastService _weatherForecastService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger , IWeatherForecastService weatherForecastService, IMapper mapper)
        {
            _logger = logger;
            _mapper = mapper;
            _weatherForecastService = weatherForecastService;
        }

        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<WeatherForecastViewModel>), (int)HttpStatusCode.OK)]
        public ActionResult GetWeatherForecastList([FromQuery] WeatherForecastFilterViewModel filter)
        {
            this._logger.LogDebug("Test logging", null);
            List<WeatherForecast> result = this._weatherForecastService.GetWeatherList(this._mapper.Map<WeatherForecastFilter>(filter));
            List<WeatherForecastViewModel> data = this._mapper.Map<List<WeatherForecastViewModel>>(result);
            return new JsonResult(data);
        }
    }
}
