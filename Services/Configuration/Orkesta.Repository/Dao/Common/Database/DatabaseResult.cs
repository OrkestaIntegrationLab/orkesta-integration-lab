using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Orkesta.Repository.Dao.Common.Database
{
    public class DatabaseResult
    {

        public long IdResponseCode { get; set; }

        public string ResponseCode { get; set; }

        public long EntityId { get; set; }

        public string Table { get; set; }

        public string Message { get; set; }

        public enum ResponseCodes
        {
            /// <summary>
            /// Operacion exitosa
            /// </summary>
            Success = 0,

            /// <summary>
            /// Error general de base de datos
            /// </summary>
            GeneralError = 1000,

            /// <summary>
            /// Nombre de la entidad duplicada
            /// </summary>
            DuplicatedName = 1001,

            /// <summary>
            /// Registro no existe
            /// </summary>
            RecordDoesNotExist = 1002,

            /// <summary>
            /// Nombre de la entidad duplicada
            /// </summary>
            DuplicatedAbreviature = 1003,

            /// <summary>
            /// Nombre de la entidad duplicada
            /// </summary>
            DuplicatedCodeArea = 1004,

            /// <summary>
            /// Nombre de la entidad duplicada
            /// </summary>
            DuplicatedDocument = 1007,

            /// <summary>
            /// Código de SWIFT duplicado
            /// </summary>
            DuplicatedSwift = 1014,

            /// <summary>
            /// Código de banco duplicado
            /// </summary>
            DuplicateBankCode = 1013,

            /// <sumary>
            /// Abreviatura de entidad duplicada
            /// </sumary>
            DuplicatedAbbreviation = 1004,

            /// <sumary>
            /// Abreviatura de entidad duplicada
            /// </sumary>
            DuplicatedBranchOfficeCode = 1045,
        }
    }
}
