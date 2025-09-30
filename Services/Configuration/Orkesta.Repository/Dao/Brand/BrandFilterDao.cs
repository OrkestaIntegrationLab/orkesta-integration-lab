using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.Brand
{
    public class BrandFilterDao
    {
        [JsonProperty("IdMarca")]
        public int IdBrand { get; set; }
        
        [JsonProperty("Marca")]
        public string BrandName { get; set; }
       
        [JsonProperty("Abreviatura")]
        public string Abreviature { get; set; }

        [JsonProperty("IndActivo")]
        public int IndActive { get; set; }
    }
}
