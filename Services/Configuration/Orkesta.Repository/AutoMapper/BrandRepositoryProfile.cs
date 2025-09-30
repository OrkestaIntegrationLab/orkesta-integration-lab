using AutoMapper;
using Orkesta.Domain.Brand;
using Orkesta.Domain.DeviceType;
using Orkesta.Repository.Dao.Brand;
using Orkesta.Repository.Dao.DeviceType;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.AutoMapper
{
    public class BrandRepositoryProfile : Profile
    {
        public BrandRepositoryProfile()
        {
            _ = CreateMap<BrandFilterDao, BrandFilter>().ReverseMap();
            _ = CreateMap<BrandDao, Brand>().ReverseMap();
        }
    }
}
