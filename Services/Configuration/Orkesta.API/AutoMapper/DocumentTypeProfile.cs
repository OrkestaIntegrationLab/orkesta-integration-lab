using AutoMapper;
using Orkesta.API.ViewModels.DeviceType;
using Orkesta.API.ViewModels.DocumentType;
using Orkesta.Domain.DeviceType;
using Orkesta.Domain.DocumentType;

namespace Orkesta.API.AutoMapper
{
    public class DocumentTypeProfile : Profile
    {
        public DocumentTypeProfile()
        {
            _ = CreateMap<DocumentTypeFilterViewModel, DocumentTypeFilter>().ReverseMap();
            _ = CreateMap<DocumentTypeViewModel, DocumentType>().ReverseMap();
        }
    }
}
