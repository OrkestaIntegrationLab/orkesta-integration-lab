using AutoMapper;
using Orkesta.API.ViewModels;
using Orkesta.API.ViewModels.DeviceType;
using Orkesta.Domain.DeviceType;
using Orkesta.Domain.Weather;

namespace Orkesta.API.AutoMapper
{
    public class DeviceTypeProfile : Profile
    {
        public DeviceTypeProfile()
        {
            _ = CreateMap<DeviceTypeFilterViewModel, DeviceTypeFilter>().ReverseMap();
            _ = CreateMap<DeviceTypeViewModel, DeviceType>().ReverseMap();
        }
    }
}
