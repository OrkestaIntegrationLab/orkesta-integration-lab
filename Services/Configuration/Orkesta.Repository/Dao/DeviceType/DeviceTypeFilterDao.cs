using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.DeviceType
{
    public class DeviceTypeFilterDao
    {
        [JsonProperty("IdTipoDispositivo")]
        public int IdDeviceType { get; set; }

        [JsonProperty("TipoDispositivo")]
        public string DeviceType { get; set; }

        [JsonProperty("Abreviatura")]
        public string Abreviature { get; set; }

        [JsonProperty("IndActivo")]
        public int IndActive { get; set; }
    }
}
