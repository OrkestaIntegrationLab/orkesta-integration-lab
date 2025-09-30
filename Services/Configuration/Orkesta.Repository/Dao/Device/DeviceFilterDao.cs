using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.Device
{
    public class DeviceFilterDao
    {
        [JsonProperty("IdDispositivo")]
        public int IdDevice { get; set; }

        [JsonProperty("IdMarca")]
        public int IdBrand { get; set; }

        [JsonProperty("IdTipoDispositivo")]
        public int IdDeviceType { get; set; }

        [JsonProperty("Dispositivo")]
        public string? DeviceName { get; set; }

        [JsonProperty("Abreviatura")]
        public string? Abreviation { get; set; }

        [JsonProperty("IndActivo")]
        public int IndActive { get; set; }
    }
}
