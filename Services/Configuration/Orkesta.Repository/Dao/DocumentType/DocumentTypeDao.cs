using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.DocumentType
{
    public class DocumentTypeDao
    {
        [JsonProperty("IdTipoDocumento")]
        public int IdDocumentType { get; set; }

        [JsonProperty("TipoDocumento")]
        public string DocumentTypeName { get; set; }

        [JsonProperty("IdentificadorTipo")]
        public string Identifier { get; set; }

        [JsonProperty("Agrupacion")]
        public string Group { get; set; }
    }
}
