using AutoMapper;
using Orkesta.Domain.Brand;
using Orkesta.Domain.DocumentType;
using Orkesta.Repository.Dao.Brand;
using Orkesta.Repository.Dao.DocumentType;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.AutoMapper
{
    public class DocumentTypeRepositoryProfile : Profile
    {
        public DocumentTypeRepositoryProfile()
        {
            _ = CreateMap<DocumentTypeFilterDao, DocumentTypeFilter>().ReverseMap();
            _ = CreateMap<DocumentTypeDao, DocumentType>().ReverseMap();
        }
    }
}
