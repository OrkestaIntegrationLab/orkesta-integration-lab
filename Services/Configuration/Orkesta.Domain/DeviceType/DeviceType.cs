using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.DeviceType
{
    public class DeviceType
    {
        public int IdDeviceType { get; set; }

        public string DeviceTypeName { get; set; }

        public string Abreviature { get; set; }
        public bool IndActive { get; set; }
    }
}
