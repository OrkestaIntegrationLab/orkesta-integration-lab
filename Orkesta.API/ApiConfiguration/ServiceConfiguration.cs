using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;

using Orkesta.Domain.Weather;
using Orkesta.Repository.AutoMapper;
using Orkesta.Repository.Implementations.SqlServer;
using Orkesta.Repository.Interfaces;

namespace Orkesta.API.ApiConfiguration
{
    public static class ServiceConfiguration
    {
        private const string AllowSpecificOrigins = "AllowAllOrigin";

        internal static void ConfigureDependencies(this IServiceCollection services)
        {
            services.AddTransient<IConnector, SqlConnector>();
            services.AddTransient<IWeatherForecastService, WeatherForecastService>();
            services.AddTransient<IWeatherForecastRepository, SqlWeatherForecastRepository>();

            services.AddAutoMapper(cfg =>
            {
                cfg.AddMaps(typeof(Program).Assembly); // Perfiles en el ensamblado principal
                cfg.AddMaps(typeof(WeatherForecastRepositoryProfile).Assembly); // Perfiles específicos del repositorio
            });



        }


        internal static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options => options.AddPolicy(
                  AllowSpecificOrigins,
                  builder =>
                  {
                      _ = builder.AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                  }));
        }

        internal static void UseCorsDev(this IApplicationBuilder app)
        {
            _ = app.UseCors(AllowSpecificOrigins);
        }

        internal static void UseExceptionMiddleware(this IApplicationBuilder app)
        {
            _ = app.UseMiddleware(typeof(ExceptionHandler));
        }

    }
}
