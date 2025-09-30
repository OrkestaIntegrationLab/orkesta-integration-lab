using AutoMapper;
using Orkesta.Domain.Device;
using Orkesta.Repository.Dao.Device;

namespace Orkesta.Repository.AutoMapper
{
    public class DeviceRepositoryProfile : Profile
    {
        public DeviceRepositoryProfile()
        {
            _ = CreateMap<DeviceFilterDao, DeviceFilter>().ReverseMap();
            _ = CreateMap<DeviceDao, Device>().ReverseMap();
        }
    }
}
