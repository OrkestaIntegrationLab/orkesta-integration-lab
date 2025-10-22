using Orkesta.Domain.Brand;
using Orkesta.Domain.Device;
using Orkesta.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Client
{
    public class ClientService : IClientService
    {
        private IClientRepository _clientRepository;
        public ClientService(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        public List<Client> GetClientList(ClientFilter filter)
        {
            return _clientRepository.GetClientList(filter);
        }

        public long InsertClient(Client model, long idUser)
        {
            if (model == null)
                throw new ArgumentsNullException();
            return _clientRepository.InsertClient(model, idUser);
        }
    }
}
