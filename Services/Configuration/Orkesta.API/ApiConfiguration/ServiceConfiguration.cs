using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;
using Orkesta.Domain.Brand;
using Orkesta.Domain.Client;
using Orkesta.Domain.Device;
using Orkesta.Domain.DeviceType;
using Orkesta.Domain.DocumentType;
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
            
            //Weather
            services.AddTransient<IWeatherForecastService, WeatherForecastService>();
            services.AddTransient<IWeatherForecastRepository, SqlWeatherForecastRepository>();

            //DeviceType
            services.AddTransient<IDeviceTypeService, DeviceTypeService>();
            services.AddTransient<IDeviceTypeRepository, SqlDeviceTypeRepository>();

            //Brand
            services.AddTransient<IBrandService, BrandService>();
            services.AddTransient<IBrandRepository, SqlBrandRepository>();

            //Device
            services.AddTransient<IDeviceService, DeviceService>();
            services.AddTransient<IDeviceRepository, SqlDeviceRepository>();

            //DocumentType
            services.AddTransient<IDocumentTypeService, DocumentTypeService>();
            services.AddTransient<IDocumentTypeRepository, SqlDocumentTypeRepository>();

            //Client
            services.AddTransient<IClientService, ClientService>();
            services.AddTransient<IClientRepository, SqlClientRepository>();


            services.AddAutoMapper(cfg =>
            {
                // Perfiles en el ensamblado principal
                cfg.AddMaps(typeof(Program).Assembly); 
                // Perfiles específicos del repositorio
                cfg.AddMaps(typeof(WeatherForecastRepositoryProfile).Assembly);
                cfg.AddMaps(typeof(DeviceTypeRepositoryProfile).Assembly);
                cfg.AddMaps(typeof(BrandRepositoryProfile).Assembly);
                cfg.AddMaps(typeof(DeviceRepositoryProfile).Assembly);
                cfg.AddMaps(typeof(DocumentTypeRepositoryProfile).Assembly);
                cfg.AddMaps(typeof(ClientRepositoryProfile).Assembly);
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
