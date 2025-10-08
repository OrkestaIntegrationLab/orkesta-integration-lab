using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Device
{
    public class DeviceFilter
    {
        public int IdDevice { get; set; }

        public int IdBrand { get; set; }

        public int IdDeviceType { get; set; }

        public string? DeviceName { get; set; }

        public string? Abreviation { get; set; }

        public int IndActive { get; set; }
    }
}
