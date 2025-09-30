namespace Orkesta.API.ViewModels.Device
{
    public class DeviceFilterViewModel
    {
        public int IdDevice { get; set; }

        public int IdBrand { get; set; }

        public int IdDeviceType { get; set; }

        public string? DeviceName { get; set; }

        public string? Abreviation { get; set; }

        public int IndActive { get; set; }
    }
}
