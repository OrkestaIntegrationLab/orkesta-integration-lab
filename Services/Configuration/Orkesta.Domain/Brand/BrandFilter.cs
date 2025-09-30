using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Brand
{
    public class BrandFilter
    {

        public int IdBrand { get; set; }

        public string? BrandName { get; set; }

        public string? Abreviature { get; set; }

        public int IndActive { get; set; }
    }
}
