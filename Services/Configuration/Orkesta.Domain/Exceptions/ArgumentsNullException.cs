using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Exceptions
{
    public class ArgumentsNullException : ArgumentException
    {
        public ArgumentsNullException() : base("Ha ocurrido un error al insertar registro, faltan datos por cargar.")
        {
            
        }
    }
}
