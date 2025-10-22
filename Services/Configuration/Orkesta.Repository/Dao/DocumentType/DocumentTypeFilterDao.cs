using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.DocumentType
{
    public class DocumentTypeFilterDao
    {
        [JsonProperty("IdTipoDocumento")]
        public int IdDocumentType { get; set; }
    }
}
