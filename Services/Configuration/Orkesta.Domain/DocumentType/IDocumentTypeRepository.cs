using Orkesta.Domain.DeviceType;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.DocumentType
{
    public interface IDocumentTypeRepository
    {
        List<DocumentType> GetDocumentTypeList(DocumentTypeFilter filter);
    }
}
