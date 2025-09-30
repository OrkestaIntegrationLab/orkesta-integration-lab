using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.Device
{
    public class DeviceDao
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

        [JsonProperty("Cantidad")]
        public int Quantity { get; set; }

        [JsonProperty("IndActivo")]
        public bool IndActive { get; set; }
    }
}
