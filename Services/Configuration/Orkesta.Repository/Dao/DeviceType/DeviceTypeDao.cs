using Newtonsoft.Json;

namespace Orkesta.Repository.Dao.DeviceType
{
    public class DeviceTypeDao
    {
        [JsonProperty("IdTipoDispositivo")]
        public int IdDeviceType { get; set; }

        [JsonProperty("TipoDispositivo")]
        public string DeviceTypeName { get; set; }

        [JsonProperty("Abreviatura")]
        public string Abreviature { get; set; }

        [JsonProperty("IndActivo")]
        public bool IndActive { get; set; }


    }
}
