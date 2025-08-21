using Orkesta.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.DeviceType
{
    public class DeviceTypeService : IDeviceTypeService
    {
        public IDeviceTypeRepository _deviceTypeRepository;

        public DeviceTypeService(IDeviceTypeRepository deviceTypeRepository)
        {
            _deviceTypeRepository = deviceTypeRepository;
        }
        public List<DeviceType> GetDeviceTypeList(DeviceTypeFilter filter)
        {
           return _deviceTypeRepository.GetDeviceTypeList(filter);
        }

        public long InsertDeviceType(DeviceType deviceType, long idUser)
        {
            if (deviceType == null)
                throw new ArgumentsNullException();
            return _deviceTypeRepository.InsertDeviceType(deviceType, idUser);
        }
    }
}
