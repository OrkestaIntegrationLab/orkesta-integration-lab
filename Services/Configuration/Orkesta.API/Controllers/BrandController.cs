using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Orkesta.API.ViewModels.Brand;
using Orkesta.API.ViewModels.DeviceType;
using Orkesta.Domain.Brand;
using Orkesta.Domain.DeviceType;
using System.Net;

namespace Orkesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ILogger<BrandController> _logger;
        private readonly IBrandService _brandService;

        public BrandController( IMapper mapper , ILogger<BrandController> logger , IBrandService brandService)
        {
            _brandService = brandService;
            _mapper = mapper;
            _logger = logger;
        }


        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(typeof(List<BrandViewModel>), (int)HttpStatusCode.OK)]
        public ActionResult getBrandList([FromQuery] BrandFilterViewModel filter) {

            this._logger.LogDebug("getBrandList logging", null);
            List<Brand> result = this._brandService.GetBrandList(this._mapper.Map<BrandFilter>(filter));
            List<BrandViewModel> data = this._mapper.Map<List<BrandViewModel>>(result);
            return new JsonResult(data);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult<long> Post([FromBody] BrandViewModel model)
        {
            var result = _brandService.InsertBrand(_mapper.Map<Brand>(model), 1);
            return new JsonResult(result);
        }
    }
}
