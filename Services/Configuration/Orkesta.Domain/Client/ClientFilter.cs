using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Client
{
    public class ClientFilter
    {
        public int IdDocumentType { get; set; }

        public string? DocumentNumber { get; set; }
    }
}
