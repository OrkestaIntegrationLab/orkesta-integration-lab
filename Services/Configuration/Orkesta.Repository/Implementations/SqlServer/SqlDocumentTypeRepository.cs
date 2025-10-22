using AutoMapper;
using Newtonsoft.Json.Linq;
using Orkesta.Domain.Device;
using Orkesta.Domain.DocumentType;
using Orkesta.Repository.Dao.Device;
using Orkesta.Repository.Dao.DocumentType;
using Orkesta.Repository.Interfaces;
using Orkesta.Repository.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Implementations.SqlServer
{
    public class SqlDocumentTypeRepository : IDocumentTypeRepository
    {
        private IMapper _mapper;
        private IConnector _connector;

        public SqlDocumentTypeRepository(IMapper mapper, IConnector connector)
        {
            _mapper = mapper;
            _connector = connector;
        }

        public List<DocumentType> GetDocumentTypeList(DocumentTypeFilter filter)
        {
            var daoFilter = _mapper.Map<DocumentTypeFilterDao>(filter);
            var dataSet = _connector.GetJson("[Cliente].[spConsultarTiposDocumentos]", JObject.FromObject(daoFilter));
            var resultDao = JsonUtils.DeserializeObjectOrDefault(dataSet, new List<DocumentTypeDao>());
            var resultDomain = _mapper.Map<List<DocumentType>>(resultDao.ToList());
            return resultDomain;
        }
    }
}
