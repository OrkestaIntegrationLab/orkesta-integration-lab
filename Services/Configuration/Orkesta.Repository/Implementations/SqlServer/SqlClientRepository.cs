using AutoMapper;
using Newtonsoft.Json.Linq;
using Orkesta.Domain.Brand;
using Orkesta.Domain.Client;
using Orkesta.Domain.Device;
using Orkesta.Repository.Dao.Brand;
using Orkesta.Repository.Dao.Client;
using Orkesta.Repository.Dao.Common.Database;
using Orkesta.Repository.Dao.Device;
using Orkesta.Repository.Interfaces;
using Orkesta.Repository.Utils;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Implementations.SqlServer
{
    public class SqlClientRepository : IClientRepository
    {

        private IMapper _mapper;
        private IConnector _connector;

        public SqlClientRepository(IMapper mapper, IConnector connector)
        {
            _mapper = mapper;
            _connector = connector;
        }
        public List<Client> GetClientList(ClientFilter filter)
        {
            var daoFilter = _mapper.Map<ClientFilterDao>(filter);
            var dataSet = _connector.GetJson("[Cliente].[spConsultarClientes_test]", JObject.FromObject(daoFilter));
            var resultDao = JsonUtils.DeserializeObjectOrDefault(dataSet, new List<ClientDao>());
            var resultDoman = _mapper.Map<List<Client>>(resultDao.ToList());
            return resultDoman;
        }


        public long InsertClient(Client model, long idUser)
        {
            var daoModel = _mapper.Map<ClientDao>(model);

            var result = _connector.ExecuteWithJsonInput("[Cliente].[spActualizarCliente_Json]", daoModel, new List<SqlParameter>()
            {
                new SqlParameter("IdUsuario", idUser)
            });

            if (result.IdResponseCode != (int)DatabaseResult.ResponseCodes.Success)
            {
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.DuplicatedName)
                    return -1;
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.DuplicatedAbreviature)
                    return -2;
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.RecordDoesNotExist)
                    return -3;
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.GeneralError)
                    return -4;
                if (result.IdResponseCode == (int)DatabaseResult.ResponseCodes.DuplicatedBrand)
                    return -5;
            }

            return result.EntityId;
        }
    }
}
