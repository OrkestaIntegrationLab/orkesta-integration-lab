using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.DeviceType
{
    public class DeviceTypeService : IDeviceTypeService
    {
        public IDeviceTypeRepository _DeviceTypeRepository;

        public DeviceTypeService(IDeviceTypeRepository deviceTypeRepository)
        {
            _DeviceTypeRepository = deviceTypeRepository;
        }
        public List<DeviceType> GetDeviceTypeList(DeviceTypeFilter filter)
        {
           return _DeviceTypeRepository.GetDeviceTypeList(filter);
        }
    }
}
