using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Device
{
    public class Device
    {
        public int IdDevice { get; set; }

        public int IdBrand { get; set; }

        public int IdDeviceType { get; set; }

        public string? DeviceName { get; set; }

        public string? Abreviation { get; set; }

        public int Quantity { get; set; }

        public bool IndActive { get; set; }

        public string? DeviceTypeName { get; set; }

        public string? BrandName { get; set; }
    }
}
