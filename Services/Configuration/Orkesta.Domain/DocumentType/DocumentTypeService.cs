using Orkesta.Domain.DeviceType;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.DocumentType
{
    public class DocumentTypeService : IDocumentTypeService
    {
        public IDocumentTypeRepository _documentTypeRepository;


        public DocumentTypeService(IDocumentTypeRepository documentTypeRepository)
        {
          _documentTypeRepository = documentTypeRepository;   
        }


        public List<DocumentType> GetDocumentTypeList(DocumentTypeFilter filter)
        {
            return _documentTypeRepository.GetDocumentTypeList(filter);
        }
    }
}
