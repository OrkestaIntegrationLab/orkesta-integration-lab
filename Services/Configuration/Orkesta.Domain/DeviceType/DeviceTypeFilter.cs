using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Orkesta.Domain.DeviceType
{
    public class DeviceTypeFilter
    {

        public int IdDeviceType { get; set; }

        public string DeviceType { get; set; }
        
        public string Abreviature { get; set; }

        public int IndActive { get; set; }
    }
}
