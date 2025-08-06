using Newtonsoft.Json.Linq;
using Orkesta.Repository.Dao.Common.Database;

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Interfaces
{
    public interface IConnector
    {
        Task<DataTable> ExecuteQueryForDataTable(string query, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false);

        Task<bool> ExecuteNonQueryTask(string query, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false);

        bool ExecuteNonQuery(string query, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false);

        long ExecuteScalar(string query, SqlTransaction transaction, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false);

        string ExecuteScalarFunctionString(string v);

        DatabaseResult ExecuteWithJsonInput(string query, object input, List<SqlParameter> sqlParameters = null);

        DatabaseResult ExecuteWithParam(string query, List<SqlParameter> sqlParameters = null);

        DataSet CreateDs(string tableName, string spName, List<SqlParameter> parameters);

        SqlTransaction BeginSqlTransaction();

        void CloseConnection();

        string GetJson(string spName, List<SqlParameter> parameters);

        string GetJson(string spName, JObject jsonParams);


        public bool ExecuteScalarFunctionBool(string query);


        public DatabaseResult ExecuteWithJsonInputNoVerify(string query, object input, List<SqlParameter> sqlParameters = null);
    }
}
