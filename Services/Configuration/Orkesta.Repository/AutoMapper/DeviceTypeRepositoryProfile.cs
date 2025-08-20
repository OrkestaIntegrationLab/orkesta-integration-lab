using AutoMapper;
using Orkesta.Domain.DeviceType;
using Orkesta.Domain.Weather;
using Orkesta.Repository.Dao.DeviceType;
using Orkesta.Repository.Dao.Weather;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.AutoMapper
{
    public class DeviceTypeRepositoryProfile : Profile
    {
        public DeviceTypeRepositoryProfile()
        {
            _ = CreateMap<DeviceTypeFilterDao, DeviceTypeFilter>().ReverseMap();
            _ = CreateMap<DeviceTypeDao, DeviceType>().ReverseMap();
        }
    }
}
