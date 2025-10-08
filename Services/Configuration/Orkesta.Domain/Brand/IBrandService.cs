using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Brand
{
    public interface IBrandService
    {
        List<Brand> GetBrandList(BrandFilter filter);

        long InsertBrand(Brand brand , long idUser);
    }
}
