using Orkesta.Domain.Device;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Domain.Client
{
    public interface IClientService
    {
        List<Client> GetClientList(ClientFilter filter);

        long InsertClient(Client model, long idUser);
    }
}
