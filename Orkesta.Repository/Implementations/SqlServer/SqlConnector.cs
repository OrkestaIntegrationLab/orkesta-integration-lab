using Microsoft.Extensions.Configuration;

using Newtonsoft.Json.Linq;

using Orkesta.Domain.Exceptions;
using Orkesta.Repository.Dao.Common.Database;
using Orkesta.Repository.Interfaces;

using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static Orkesta.Repository.Dao.Common.Database.DatabaseResult;

namespace Orkesta.Repository.Implementations.SqlServer
{
    public class SqlConnector : IConnector
    {
        private readonly string _connString;

        private SqlConnection _currentConnection;


        public SqlConnector(IConfiguration appSettings, string pConnStr = "")
        {
            this.AppSettings = appSettings;
            this._connString = pConnStr == string.Empty ? this.AppSettings.GetConnectionString("DBConexion") : pConnStr;
        }

        private IConfiguration AppSettings { get; }



        public SqlTransaction BeginSqlTransaction()
        {
            try
            {
                this._currentConnection = OpenConnection();
                SqlTransaction transaction = this._currentConnection.BeginTransaction();

                return transaction;
            }
            catch (SqlException sqlEx)
            {
                throw new Exception("Error creando la transacción en la base de datos", sqlEx);
            }
        }

        public void CloseConnection()
        {
            if (this._currentConnection != null && this._currentConnection.State != ConnectionState.Closed)
            {
                this._currentConnection.Close();
                this._currentConnection.Dispose();
            }
        }

        public Task<DataTable> ExecuteQueryForDataTable(string query, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false)
        {
            SqlConnection conn = new SqlConnection(this._connString);
            try
            {
                return Task.Run(() =>
                {
                    DataTable dt = new DataTable();
                    using (conn)
                    {
                        using SqlCommand cmd = new SqlCommand(query, conn)
                        {
                            CommandType = isStoreProcedure ? CommandType.StoredProcedure : CommandType.Text
                        };
                        cmd.Parameters.AddRange(sqlParameters?.ToArray());
                        SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                        _ = adapter.Fill(dt);
                    }

                    return dt;
                });
            }
            finally
            {
                conn.Close();
            }
        }

        public bool ExecuteNonQuery(string query, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false)
        {
            SqlConnection conn = new SqlConnection(this._connString);
            try
            {
                using (conn)
                {
                    using SqlCommand cmd = new SqlCommand(query, conn)
                    {
                        CommandType = isStoreProcedure ? CommandType.StoredProcedure : CommandType.Text
                    };
                    cmd.Parameters.AddRange(sqlParameters?.ToArray());
                    conn.Open();
                    _ = cmd.ExecuteNonQuery();
                    return true;
                }
            }
            finally
            {
                conn.Close();
            }
        }

        public long ExecuteScalar(string query, SqlTransaction transaction, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false)
        {
            return transaction is null
                ? ExecuteScalar(query, sqlParameters, isStoreProcedure)
                : ExecuteScalarTransaction(query, transaction, sqlParameters, isStoreProcedure);
        }

        /// <summary>
        /// Ejecuta un SP que recibira como parametro un json y algun otro parametro opcional.
        /// </summary>
        /// <param name="query">SP a ejecutar.</param>
        /// <param name="input">Objeto que sera serializado a json y servira como entrada al sp.</param>
        /// <param name="sqlParameters">Parametros sql adicionales (opcional).</param>
        /// <returns>Escalar retornado por la consulta.</returns>
        public DatabaseResult ExecuteWithJsonInput(string query, object input, List<SqlParameter> sqlParameters = null)
        {
            List<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("Data", JObject.FromObject(input).ToString())
            };
            if (sqlParameters != null)
            {
                paramList.AddRange(sqlParameters);
            }

            int intento = 0;
            DatabaseResult result = new DatabaseResult();
            DbDataReader reader;

        RETRY:

            SqlConnection cname = OpenConnection(this._connString);
            try
            {
                using (cname)
                {
                    using SqlCommand cmd = new SqlCommand(query, cname)
                    {
                        CommandType = CommandType.StoredProcedure
                    };
                    FillParameters(paramList, cmd);
                    reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        _ = reader.Read();
                        result = new DatabaseResult()
                        {
                            EntityId = (long)reader.GetValue("Id"),
                            IdResponseCode = (int)reader.GetValue("IdCodigoRespuesta"),
                            Message = Convert.ToString(reader.GetValue("MensajeError")),
                            ResponseCode = Convert.ToString(reader.GetValue("CodigoRespuesta")),
                            Table = Convert.ToString(reader.GetValue("NombreTabla"))
                        };
                    }

                    reader.Close();
                }
            }
            catch (SqlException e)
            {
                if (++intento < 2)
                {
                    goto RETRY;
                }

                throw new Exception(e.Message, e);
            }
            catch (Exception ex)
            {
                throw new Exception("Error ejecutando consulta [" + query + "] en GetJson", ex);
            }
            finally
            {
                if (cname.State == ConnectionState.Open)
                    cname.Close();
            }

            VerifyDbResult(result);
            return result;
        }

        /// <summary>
        /// Ejecuta un SP que recibira como parametro un json y algun otro parametro opcional.
        /// </summary>
        /// <param name="query">SP a ejecutar.</param>
        /// <param name="input">Objeto que sera serializado a json y servira como entrada al sp.</param>
        /// <param name="sqlParameters">Parametros sql adicionales (opcional).</param>
        /// <returns>Escalar retornado por la consulta.</returns>
        public DatabaseResult ExecuteWithJsonInputNoVerify(string query, object input, List<SqlParameter> sqlParameters = null)
        {
            List<SqlParameter> paramList = new List<SqlParameter>()
            {
                new SqlParameter("Data", JObject.FromObject(input).ToString())
            };
            if (sqlParameters != null)
            {
                paramList.AddRange(sqlParameters);
            }

            int intento = 0;
            DatabaseResult result = new DatabaseResult();
            DbDataReader reader;

        RETRY:

            SqlConnection cname = OpenConnection(this._connString);
            try
            {
                using (cname)
                {
                    using SqlCommand cmd = new SqlCommand(query, cname)
                    {
                        CommandType = CommandType.StoredProcedure
                    };
                    FillParameters(paramList, cmd);
                    reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        _ = reader.Read();
                        result = new DatabaseResult()
                        {
                            EntityId = (long)reader.GetValue("Id"),
                            IdResponseCode = (int)reader.GetValue("IdCodigoRespuesta"),
                            Message = Convert.ToString(reader.GetValue("MensajeError")),
                            ResponseCode = Convert.ToString(reader.GetValue("CodigoRespuesta")),
                            Table = Convert.ToString(reader.GetValue("NombreTabla"))
                        };
                    }

                    reader.Close();
                }
            }
            catch (SqlException e)
            {
                if (++intento < 2)
                {
                    goto RETRY;
                }

                throw new Exception(e.Message, e);
            }
            catch (Exception ex)
            {
                throw new Exception("Error ejecutando consulta [" + query + "] en GetJson", ex);
            }
            finally
            {
                if (cname.State == ConnectionState.Open)
                    cname.Close();
            }

            // VerifyDbResult(result);
            return result;
        }


        /// <summary>Para obtener dataser desde un SP que se ejecuta en la base de datos.</summary>
        /// <param name="tableName">Name de la tabla con que estara en el Dataset.</param>
        /// <param name="spName">Name del StoredProcdure.</param>
        /// <param name="parameters">Lista de SQLPARAMETER necesarios para el SP.</param>
        /// <returns>The resulting data set.</returns>
        public DataSet CreateDs(string tableName, string spName, List<SqlParameter> parameters)
        {
            int retry = 0;
            DataSet ds = new DataSet();

        RETRY:

            SqlConnection cname = OpenConnection(this._connString);
            try
            {
                using (cname)
                {
                    using SqlCommand cmd = new SqlCommand(spName, cname)
                    {
                        CommandType = CommandType.StoredProcedure
                    };
                    FillParameters(parameters, cmd);

                    SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                    _ = adapter.Fill(ds, tableName);
                }
            }
            catch (SqlException e)
            {
                if (++retry < 2)
                {
                    goto RETRY;
                }

                throw new Exception(e.Message, e);
            }
            catch (Exception ex)
            {
                throw new Exception("Error ejecutando consulta [" + spName + "] en CreaDS", ex);
            }
            finally
            {
                cname.Close();
            }

            return ds;
        }

        public Task<bool> ExecuteNonQueryTask(string query, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false)
        {
            SqlConnection conn = new SqlConnection(this._connString);
            try
            {
                return Task.Run(() =>
                {
                    using (conn)
                    {
                        using SqlCommand cmd = new SqlCommand(query, conn)
                        {
                            CommandType = isStoreProcedure ? CommandType.StoredProcedure : CommandType.Text
                        };
                        cmd.Parameters.AddRange(sqlParameters?.ToArray());
                        conn.Open();
                        _ = cmd.ExecuteNonQuery();
                    }

                    return true;
                });
            }
            finally
            {
                conn.Close();
            }
        }

        public string GetJson(string spName, JObject jsonParams) => GetJson(spName, JObjectToSqlParams(jsonParams));

        /// <summary>
        /// Para obtener resultado en formato Json desde un SP que se ejecuta en la base de datos.
        /// </summary>
        /// <param name="spName">Name del StoredProcdure. </param>
        /// <param name="parameters">Lista de SQLPARAMETER necesarios para el SP. </param>
        /// <returns>JsonString.</returns>
        public string GetJson(string spName, List<SqlParameter> parameters)
        {
            int intento = 0;
            StringBuilder jsonResult = new StringBuilder();
            DbDataReader reader;

        RETRY:

            SqlConnection cname = OpenConnection(this._connString);
            try
            {
                using (cname)
                {
                    using SqlCommand cmd = new SqlCommand(spName, cname)
                    {
                        CommandType = CommandType.StoredProcedure
                    };
                    FillParameters(parameters, cmd);
                    reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            _ = jsonResult.Append(reader.GetValue(0).ToString());
                        }
                    }

                    reader.Close();
                }
            }
            catch (SqlException e)
            {
                if (++intento < 2)
                {
                    goto RETRY;
                }

                throw new Exception(e.Message, e);
            }
            catch (Exception ex)
            {
                throw new Exception("Error ejecutando consulta [" + spName + "] en GetJson", ex);
            }
            finally
            {
                cname.Close();
            }

            return jsonResult.ToString();
        }

        /// <summary>
        ///     Llena los valores de los parametros de la lista.
        /// </summary>
        /// <param name="parameters">The sql parameters.</param>
        /// <param name="cmd">The sql command.</param>
        private static void FillParameters(List<SqlParameter> parameters, SqlCommand cmd) => parameters.ForEach(param => cmd.Parameters.AddWithValue(param.ParameterName, param.Value));


        private SqlConnection OpenConnection(string connString = "")
        {
            if (string.IsNullOrEmpty(connString))
            {
                connString = this._connString;
            }

            SqlConnection myConn = new SqlConnection(connString);
            int retryAttempts = 1;
        retry:
            try
            {
                myConn.Open();
            }
            catch (SqlException sqlEx)
            {
                if (retryAttempts < 3)
                {
                    retryAttempts++;
                    goto retry;
                }

                throw new Exception("Error conectando a la base de datos", sqlEx);
            }

            return myConn;
        }

        private long ExecuteScalar(string query, List<SqlParameter> sqlParameters = null, bool isStoreProcedure = false)
        {
            SqlConnection conn = new SqlConnection(this._connString);
            try
            {
                using (conn)
                {
                    long @return;
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.CommandType = isStoreProcedure ? CommandType.StoredProcedure : CommandType.Text;
                        cmd.Parameters.AddRange(sqlParameters?.ToArray());
                        conn.Open();
                        @return = (long)cmd.ExecuteScalar();
                    }

                    return @return;
                }
            }
            finally
            {
                conn.Close();
            }
        }

        private long ExecuteScalarTransaction(
    string query,
    SqlTransaction transaction,
    List<SqlParameter> sqlParameters = null,
    bool isStoreProcedure = false)
        {
            try
            {
                long @return;
                using (SqlCommand cmd = new SqlCommand(query, transaction.Connection, transaction))
                {
                    cmd.CommandType = isStoreProcedure ? CommandType.StoredProcedure : CommandType.Text;
                    cmd.Parameters.AddRange(sqlParameters?.ToArray());
                    @return = (long)cmd.ExecuteScalar();
                }

                return @return;
            }
            catch (Exception)
            {
                transaction.Rollback();
                throw;
            }
        }

        private List<SqlParameter> JObjectToSqlParams(JObject jsonParams)
        {
            if (jsonParams == null)
                return new List<SqlParameter>();
            List<SqlParameter> sqlParams = new List<SqlParameter>();

            foreach (KeyValuePair<string, JToken> pair in jsonParams)
            {
                sqlParams.Add(new SqlParameter(pair.Key, pair.Value.ToString()));
            }

            return sqlParams;
        }

        private void VerifyDbResult(DatabaseResult dr)
        {
            switch (dr.IdResponseCode)
            {
                case (int)ResponseCodes.DuplicatedName:
                    throw new BusinessException("duplicate_record", System.Net.HttpStatusCode.BadRequest);

                case (int)ResponseCodes.DuplicateBankCode:
                    throw new BusinessException("duplicate_bank_code", System.Net.HttpStatusCode.BadRequest);

                case (int)ResponseCodes.DuplicatedSwift:
                    throw new BusinessException("duplicate_bank_swift", System.Net.HttpStatusCode.BadRequest);

                case (int)ResponseCodes.DuplicatedAbreviature:
                    throw new BusinessException("duplicate_ab", System.Net.HttpStatusCode.BadRequest);

                case (int)ResponseCodes.RecordDoesNotExist:
                    throw new BusinessException("record_notfound", System.Net.HttpStatusCode.NotFound);

                case (int)ResponseCodes.GeneralError:
                    throw new BusinessException("general_error", System.Net.HttpStatusCode.BadRequest);
            }
        }

        public DatabaseResult ExecuteWithParam(string query, List<SqlParameter> sqlParameters = null)
        {
            List<SqlParameter> paramList = new List<SqlParameter>();
            if (sqlParameters != null)
            {
                paramList.AddRange(sqlParameters);
            }

            int intento = 0;
            DatabaseResult result = new DatabaseResult();
            DbDataReader reader;

        RETRY:

            SqlConnection cname = OpenConnection(this._connString);
            try
            {
                using (cname)
                {
                    using SqlCommand cmd = new SqlCommand(query, cname)
                    {
                        CommandType = CommandType.StoredProcedure
                    };
                    FillParameters(paramList, cmd);
                    reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        _ = reader.Read();
                        result = new DatabaseResult()
                        {
                            EntityId = (long)reader.GetValue("Id"),
                            IdResponseCode = (int)reader.GetValue("IdCodigoRespuesta"),
                            Message = Convert.ToString(reader.GetValue("MensajeError")),
                            ResponseCode = Convert.ToString(reader.GetValue("CodigoRespuesta")),
                            Table = Convert.ToString(reader.GetValue("NombreTabla"))
                        };
                    }

                    reader.Close();
                }
            }
            catch (SqlException e)
            {
                if (++intento < 2)
                {
                    goto RETRY;
                }

                throw new Exception(e.Message, e);
            }
            catch (Exception ex)
            {
                throw new Exception("Error ejecutando consulta [" + query + "] en GetJson", ex);
            }
            finally
            {
                if (cname.State == ConnectionState.Open)
                    cname.Close();
            }

            return result;
        }

        public string ExecuteScalarFunctionString(string query)
        {
            SqlConnection conn = new SqlConnection(this._connString);
            try
            {
                using (conn)
                {
                    string @return;
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.CommandType = CommandType.Text;
                        conn.Open();
                        @return = (string)cmd.ExecuteScalar();
                    }

                    return @return;
                }
            }
            finally
            {
                conn.Close();
            }
        }

        public bool ExecuteScalarFunctionBool(string query)
        {
            SqlConnection conn = new SqlConnection(this._connString);
            try
            {
                using (conn)
                {
                    bool @return;
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.CommandType = CommandType.Text;
                        conn.Open();
                        @return = (bool)cmd.ExecuteScalar();
                    }

                    return @return;
                }
            }
            finally
            {
                conn.Close();
            }
        }


    }
}
