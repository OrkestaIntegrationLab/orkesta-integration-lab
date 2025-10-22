using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.DocumentType
{
    public class DocumentType
    {
        public int IdDocumentType { get; set; }

        public string DocumentTypeName { get; set; }

        public string Identifier { get; set; }

        public string Group { get; set; }
    }
}
