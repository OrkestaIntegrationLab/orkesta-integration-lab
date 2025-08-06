using Microsoft.Extensions.Localization;

using Newtonsoft.Json;

using Orkesta.Domain.Exceptions;

using System.Net;

namespace Orkesta.API.ApiConfiguration
{
    public class ExceptionHandler
    {
        private readonly RequestDelegate _next;
        private readonly IStringLocalizer<Program> _localizer;

        public ExceptionHandler(RequestDelegate next, IStringLocalizer<Program> localizer)
        {
            this._next = next;
            this._localizer = localizer;
        }


        // ReSharper disable once UnusedMember.Global
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await this._next(context);
            }
            catch (BusinessException ex)
            {
                await InternalErrorException(context, ex, ex.HttpStatusCode);
            }
            catch (Exception ex)
            {
                await InternalErrorException(context, ex, HttpStatusCode.InternalServerError);
            }
        }

        private Task InternalErrorException(HttpContext context, Exception ex, HttpStatusCode statusCode)
        {
            Exception baseException = ex.GetBaseException();
            string result = JsonConvert.SerializeObject(new
            {
                message = GetMessage(baseException.Message),
                detail = baseException.StackTrace
            });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)statusCode;
            return context.Response.WriteAsync(result);
        }

        private string GetMessage(string key)
        {
            LocalizedString message = this._localizer.GetString(key);
            return !message.ResourceNotFound ? message.Value : $"Error message missing: {key}";
        }
    }
}
