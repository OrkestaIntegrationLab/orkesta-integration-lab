using AutoMapper;
using Orkesta.API.ViewModels.Device;
using Orkesta.API.ViewModels.DeviceType;
using Orkesta.Domain.Device;
using Orkesta.Domain.DeviceType;

namespace Orkesta.API.AutoMapper
{
    public class DeviceProfile : Profile
    {
        public DeviceProfile()
        {
            _ = CreateMap<DeviceFilterViewModel, DeviceFilter>().ReverseMap();
            _ = CreateMap<DeviceViewModel, Device>().ReverseMap();
        }
    }
}
