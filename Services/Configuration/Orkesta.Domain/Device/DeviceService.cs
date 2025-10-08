using Orkesta.Domain.DeviceType;
using Orkesta.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Device
{
    public class DeviceService : IDeviceService
    {

        private IDeviceRepository _deviceRepository;

        public DeviceService(IDeviceRepository deviceRepository)
        {
            _deviceRepository = deviceRepository;
        }
        public List<Device> GetDeviceList(DeviceFilter filter)
        {
            return _deviceRepository.GetDeviceList(filter);
        }

        public long InsertDevice(Device device, long idUser)
        {
            if(device == null)
                throw new ArgumentsNullException();
            return _deviceRepository.InsertDevice(device, idUser);
             
        }
    }
}
