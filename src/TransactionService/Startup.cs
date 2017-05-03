using MediatR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Owin;
using Swashbuckle.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Unity.WebApi;

using static Microsoft.Practices.Unity.AllClasses;

[assembly: OwinStartup(typeof(TransactionService.Startup))]

namespace TransactionService
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(UnityConfiguration.GetContainer());

            GlobalConfiguration.Configure(config => ApiConfiguration.Install(config, app));
        }
    }

    public static class ApiConfiguration
    {
        public static void Install(HttpConfiguration config, IAppBuilder app)
        {
            config.MapHttpAttributeRoutes();
            config
                .EnableSwagger(c => c.SingleApiVersion("v1", "TransactionService"))
                .EnableSwaggerUi();

            app.UseCors(CorsOptions.AllowAll);

            var jsonSerializerSettings = new JsonSerializerSettings();
            jsonSerializerSettings.Formatting = Formatting.Indented;
            jsonSerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;           
            jsonSerializerSettings.StringEscapeHandling = StringEscapeHandling.EscapeHtml;
            jsonSerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.SerializerSettings = jsonSerializerSettings;

            config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }

    public class UnityConfiguration
    {

        public static IUnityContainer GetContainer()
        {
            var container = new UnityContainer();
            container.AddMediator<UnityConfiguration>();
            return container;
        }
    }
    public static class UnityContainerExtension
    {

        public static IUnityContainer AddMediator<T>(this IUnityContainer container)
        {
            var classes = FromAssemblies(typeof(T).Assembly)
                .Where(x => x.Name.Contains("Controller") == false)
                .ToList();

            return container.RegisterClassesTypesAndInstances(classes);
        }

        public static IUnityContainer RegisterClassesTypesAndInstances(this IUnityContainer container, IList<Type> classes)
        {
            container.RegisterClasses(classes);
            container.RegisterType<IMediator, Mediator>();
            container.RegisterInstance<SingleInstanceFactory>(t => container.IsRegistered(t) ? container.Resolve(t) : null);
            container.RegisterInstance<MultiInstanceFactory>(t => container.ResolveAll(t));
            return container;
        }

        public static void RegisterClasses(this IUnityContainer container, IList<Type> types)
            => container.RegisterTypes(types, WithMappings.FromAllInterfaces, container.GetName, container.GetLifetimeManager);

        public static string GetName(this IUnityContainer container, Type type)
            => container.IsNotificationHandler(type) ? string.Format("HandlerFor" + type.Name) : string.Empty;

        public static LifetimeManager GetLifetimeManager(this IUnityContainer container, Type type)
            => container.IsNotificationHandler(type) ? new ContainerControlledLifetimeManager() : null;

        public static bool IsNotificationHandler(this IUnityContainer container, Type type)
            => type.GetInterfaces().Any(x => x.IsGenericType && (x.GetGenericTypeDefinition() == typeof(INotificationHandler<>) || x.GetGenericTypeDefinition() == typeof(IAsyncNotificationHandler<>)));
    }    
}
    
