using AutoMapper;
using Orkesta.API.ViewModels.Brand;
using Orkesta.API.ViewModels.DeviceType;
using Orkesta.Domain.Brand;
using Orkesta.Domain.DeviceType;

namespace Orkesta.API.AutoMapper
{
    public class BrandProfile : Profile
    {
        public BrandProfile()
        {
            _ = CreateMap<BrandFilterViewModel, BrandFilter>().ReverseMap();
            _ = CreateMap<BrandViewModel, Brand>().ReverseMap();
        }
    }
}
