using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Orkesta.API.ViewModels;
using Orkesta.API.ViewModels.DeviceType;
using Orkesta.Domain.DeviceType;
using Orkesta.Domain.Weather;
using System.Net;

namespace Orkesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DeviceTypeController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ILogger<DeviceTypeController> _logger;


        /// <summary>
        /// Llamadada al servicio  para consultar y actualizar data.
        /// </summary>
        private readonly IDeviceTypeService _deviceTypeService;
        public DeviceTypeController(ILogger<DeviceTypeController> logger, IDeviceTypeService deviceTypeService, IMapper mapper)
        {
            _deviceTypeService = deviceTypeService;
            _mapper = mapper;
            _logger = logger;
        }


        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<DeviceTypeViewModel>), (int)HttpStatusCode.OK)]
        public ActionResult GetDeviceTypeList([FromQuery] DeviceTypeFilterViewModel filter)
        {
            this._logger.LogDebug("GetDeviceTypeList logging", null);
            List<DeviceType> result = this._deviceTypeService.GetDeviceTypeList(this._mapper.Map<DeviceTypeFilter>(filter));
            List<DeviceTypeViewModel> data = this._mapper.Map<List<DeviceTypeViewModel>>(result);
            return new JsonResult(data);
        }
    }
}
