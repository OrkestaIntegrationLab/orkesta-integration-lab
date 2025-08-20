using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.DeviceType
{
    public interface IDeviceTypeService
    {
        List<DeviceType> GetDeviceTypeList(DeviceTypeFilter filter);
    }
}
