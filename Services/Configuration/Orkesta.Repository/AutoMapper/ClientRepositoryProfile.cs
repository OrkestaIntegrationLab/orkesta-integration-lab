using AutoMapper;
using Orkesta.Domain.Client;
using Orkesta.Domain.Device;
using Orkesta.Repository.Dao.Client;
using Orkesta.Repository.Dao.Device;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.AutoMapper
{
    public class ClientRepositoryProfile : Profile
    {
        public ClientRepositoryProfile()
        {
            _ = CreateMap<ClientFilterDao, ClientFilter>().ReverseMap();
            _ = CreateMap<ClientDao, Client>().ReverseMap();
        }
    }
}
