using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Orkesta.API.ViewModels.Brand;
using Orkesta.API.ViewModels.Client;
using Orkesta.API.ViewModels.Device;
using Orkesta.Domain.Brand;
using Orkesta.Domain.Client;
using Orkesta.Domain.Device;
using System.Net;

namespace Orkesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private IMapper _mapper;
        private ILogger<ClientController> _logger;
        private IClientService _clientService;

        public ClientController(IMapper mapper, ILogger<ClientController> logger, IClientService clientService)
        {
            _logger = logger;
            _mapper = mapper;
            _clientService = clientService;
        }

        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<ClientViewModel>), (int)HttpStatusCode.OK)]
        public ActionResult GetClientList([FromQuery] ClientFilterViewModel filter)
        {

            this._logger.LogDebug("GetClientList logging", null);
            List<Client> result = this._clientService.GetClientList(this._mapper.Map<ClientFilter>(filter));
            List<ClientViewModel> data = this._mapper.Map<List<ClientViewModel>>(result);
            return new JsonResult(data);
        }

        [HttpPost("{userId}")]
        [AllowAnonymous]
        public ActionResult<long> Post([FromBody] ClientViewModel model)
        {
            var result = _clientService.InsertClient(_mapper.Map<Client>(model), 1);
            return new JsonResult(result);
        }
    }
}
