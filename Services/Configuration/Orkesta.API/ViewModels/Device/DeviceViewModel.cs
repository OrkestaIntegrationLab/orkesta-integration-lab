namespace Orkesta.API.ViewModels.Device
{
    public class DeviceViewModel
    {
        public int IdDevice { get; set; }

        public int IdBrand { get; set; }

        public int IdDeviceType { get; set; }

        public string? DeviceName { get; set; }

        public string? Abreviation { get; set; }

        public int Quantity { get; set; }

        public bool IndActive { get; set; }
    }
}
