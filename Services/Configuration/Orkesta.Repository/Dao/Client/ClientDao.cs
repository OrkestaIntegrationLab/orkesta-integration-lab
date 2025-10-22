using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.Client
{
    public class ClientDao
    {
           [JsonProperty("IdCliente")]
            public int IdClient { get; set; }

            [JsonProperty("IdTipoDocumento")]
            public int IdDocumentType { get; set; }

            [JsonProperty("NumeroDocumento")]
            public string DocumentNumber { get; set; }

            [JsonProperty("TipoDocumento")]
            public string DocumentTypeName { get; set; }

            [JsonProperty("IdentificadorTipo")]
            public string DocumentIdentifier { get; set; }

            [JsonProperty("Nombres")]
            public string FirstName { get; set; }

            [JsonProperty("Apellidos")]
            public string LastName { get; set; }

            [JsonProperty("Telefono")]
            public string Phone { get; set; }

            [JsonProperty("Correo")]
            public string Email { get; set; }

            [JsonProperty("Direccion")]
            public string Address { get; set; }
        

    }
}
