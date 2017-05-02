declare interface IConfigurationService {
    baseUrl: string;
}

class ConfigurationService implements IConfigurationService {
    public baseUrl: string = "http://transaction-service.azurewebsites.net/";
}

angular.module("ngTransactionsApp.configuration")
    .service("configurationService", [ConfigurationService]);