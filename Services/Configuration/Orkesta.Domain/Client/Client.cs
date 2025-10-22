using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Client
{
    public class Client
    {
        public int IdClient { get; set; }
        public int IdDocumentType { get; set; }
        public string DocumentNumber { get; set; }
        public string DocumentTypeName { get; set; }
        public string DocumentIdentifier { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}
