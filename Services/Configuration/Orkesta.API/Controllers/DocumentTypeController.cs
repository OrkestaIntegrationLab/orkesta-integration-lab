using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Orkesta.API.ViewModels.Device;
using Orkesta.API.ViewModels.DocumentType;
using Orkesta.Domain.Device;
using Orkesta.Domain.DocumentType;
using System.Net;

namespace Orkesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DocumentTypeController : ControllerBase
    {
        private IMapper _mapper;
        private ILogger<DocumentTypeController> _logger;
        private IDocumentTypeService _service;


        public DocumentTypeController(IMapper mapper, ILogger<DocumentTypeController> logger, IDocumentTypeService service)
        {
            _service = service;
            _mapper = mapper;
            _logger = logger;
        }


        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<DocumentTypeViewModel>), (int)HttpStatusCode.OK)]
        public ActionResult GetDocumentTypeList([FromQuery] DocumentTypeFilterViewModel filter)
        {
            this._logger.LogDebug("GetDeviceList logging", null);
            List<DocumentType> result = this._service.GetDocumentTypeList(this._mapper.Map<DocumentTypeFilter>(filter));
            List<DocumentTypeViewModel> data = this._mapper.Map<List<DocumentTypeViewModel>>(result);
            return new JsonResult(data);
        }

    }
}
