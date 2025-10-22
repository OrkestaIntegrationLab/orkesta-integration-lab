using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.Client
{
    public class ClientFilterDao
    {
        [JsonProperty("IdTipoDocumento")]
        public int IdDocumentType { get; set; }

        [JsonProperty("NumeroDocumento")]
        public string? DocumentNumber { get; set; }
    }
}
