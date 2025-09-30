using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Device
{
    public interface IDeviceService
    {
        List<Device> GetDeviceList(DeviceFilter filter);

        long InsertDevice(Device device, long idUser);
    }
}
