import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {ConfigurationService} from "./services/configuration/configuration.service";
import {AuthorizeInterceptor, AuthorizeService, SharedAuthModule} from "@meshmakers/shared-auth";
import {defaultAuthorizeOptions} from "./config/defaultAuthorizeOptions";
import {defaultOctoServiceOptions} from "./config/defaultOctoServiceOptions";
import {MessageService, SharedServicesModule} from "@meshmakers/shared-services";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {HttpErrorInterceptor} from "./shared/httpErrorInterceptor";
import {OctoServicesModule} from "@meshmakers/octo-services";
import {IaSharedUIModule} from "@meshmakers/shared-ui";
import {Apollo, ApolloModule} from "apollo-angular";
import {HttpLink} from "apollo-angular/http";
import { InMemoryCache } from '@apollo/client/core';
import { provideServiceWorker } from '@angular/service-worker';
import {NotificationService} from "./services/notification/notification.service";

export const appConfig: ApplicationConfig = {
  providers: [
    ConfigurationService,
    provideRouter(routes),
    importProvidersFrom(ApolloModule, SharedServicesModule.forRoot(), OctoServicesModule.forRoot(defaultOctoServiceOptions), SharedAuthModule.forRoot(defaultAuthorizeOptions), IaSharedUIModule),
    provideAnimations(),
    {
        provide: APP_INITIALIZER,
        useFactory: initServices,
        deps: [ConfigurationService, AuthorizeService, HttpLink, Apollo],
        multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        deps: [MessageService],
        multi: true
    },
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
]
};

export function initServices(configurationService: ConfigurationService, authorizeService: AuthorizeService, httpLink: HttpLink,
                             apollo: Apollo) {
  return async () => {
    await configurationService.loadConfig();

    defaultAuthorizeOptions.wellKnownServiceUris = [
      configurationService.config.assetServices,
      configurationService.config.issuer
    ];

    defaultOctoServiceOptions.assetServices = configurationService.config.assetServices;

    defaultAuthorizeOptions.issuer = configurationService.config.issuer;
    defaultAuthorizeOptions.scope = configurationService.config.scope;
    defaultAuthorizeOptions.redirectUri = configurationService.config.redirectUri;
    defaultAuthorizeOptions.postLogoutRedirectUri = configurationService.config.postLogoutRedirectUri;
    defaultAuthorizeOptions.clientId = configurationService.config.clientId;
    defaultAuthorizeOptions.showDebugInformation = true;

    await authorizeService.initialize();

    const service = configurationService.config.assetServices ?? '';
    const uri = `${service}tenants/${configurationService.config.tenantId}/GraphQL`;

    apollo.create({
      cache: new InMemoryCache({
        dataIdFromObject: (o) => <string>o['rtId']
      }),
      link: httpLink.create({
        uri
      })
    });
  };
}
