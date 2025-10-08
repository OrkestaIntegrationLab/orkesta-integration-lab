using Orkesta.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Brand
{
    public class BrandService : IBrandService
    {

        public IBrandRepository _brandRepository;

        public BrandService(IBrandRepository brandRepository)
        {
           _brandRepository = brandRepository;
        }

        public List<Brand> GetBrandList(BrandFilter filter)
        {
          return _brandRepository.GetBrandList(filter);
        }

        public long InsertBrand(Brand brand,long idUser)
        {
            if (brand == null )
                throw new ArgumentsNullException();
            return _brandRepository.InsertBrand(brand , idUser);
        }
    }
}
