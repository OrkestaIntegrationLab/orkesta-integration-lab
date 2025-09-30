using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Orkesta.API.ViewModels.Device;
using Orkesta.API.ViewModels.DeviceType;
using Orkesta.Domain.Device;
using Orkesta.Domain.DeviceType;
using System.Net;

namespace Orkesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DeviceController : ControllerBase
    {
        private IMapper _mapper;
        private ILogger<DeviceController> _logger;

        private IDeviceService _deviceService;

        public DeviceController(IMapper mapper, ILogger<DeviceController> logger , IDeviceService device)
        {
            _deviceService = device;
            _mapper = mapper;
            _logger = logger;
        }

        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<DeviceViewModel>), (int)HttpStatusCode.OK)]
        public ActionResult GetDeviceList([FromQuery]DeviceFilterViewModel filter) {

            this._logger.LogDebug("GetDeviceList logging", null);
            List<Device> result = this._deviceService.GetDeviceList(this._mapper.Map<DeviceFilter>(filter));
            List<DeviceViewModel> data = this._mapper.Map<List<DeviceViewModel>>(result);
            return new JsonResult(data);
        }
    }
}
