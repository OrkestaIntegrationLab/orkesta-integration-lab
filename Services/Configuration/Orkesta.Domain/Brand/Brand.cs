using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Brand
{
    public class Brand
    {
        public int IdBrand { get; set; }

        public string? BrandName { get; set; }

        public string? Abreviature { get; set; }


        public bool IndActive { get; set; }
    }
}
