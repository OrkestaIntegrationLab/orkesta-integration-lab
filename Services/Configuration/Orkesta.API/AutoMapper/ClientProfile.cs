using AutoMapper;
using Orkesta.API.ViewModels.Client;
using Orkesta.API.ViewModels.Device;
using Orkesta.Domain.Client;
using Orkesta.Domain.Device;

namespace Orkesta.API.AutoMapper
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            _ = CreateMap<ClientFilterViewModel, ClientFilter>().ReverseMap();
            _ = CreateMap<ClientViewModel, Client>().ReverseMap();
        }
    }
}
