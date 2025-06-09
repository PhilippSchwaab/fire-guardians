import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  isDevMode,
  provideAppInitializer
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {ConfigurationService} from "./services/configuration/configuration.service";
import {AuthorizeInterceptor, AuthorizeService, SharedAuthModule} from "@meshmakers/shared-auth";
import {defaultAuthorizeOptions} from "./config/defaultAuthorizeOptions";
import {defaultOctoServiceOptions} from "./config/defaultOctoServiceOptions";
import {MessageService, SharedServicesModule} from "@meshmakers/shared-services";
import {HTTP_INTERCEPTORS, provideHttpClient, withJsonpSupport} from "@angular/common/http";
import {HttpErrorInterceptor} from "./shared/httpErrorInterceptor";
import {OctoServicesModule} from "@meshmakers/octo-services";
import {MmSharedUiModule} from "@meshmakers/shared-ui";
import {provideApollo} from "apollo-angular";
import {HttpLink} from "apollo-angular/http";
import {InMemoryCache} from '@apollo/client/core';
import {provideServiceWorker} from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withJsonpSupport()),
    ConfigurationService,
    provideRouter(routes),
    importProvidersFrom(SharedServicesModule.forRoot(), OctoServicesModule.forRoot(defaultOctoServiceOptions), SharedAuthModule.forRoot(defaultAuthorizeOptions), MmSharedUiModule),
    provideAnimations(),
    provideAppInitializer(initServices),
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      deps: [MessageService],
      multi: true
    },
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      const configurationService = inject(ConfigurationService);

      const service = configurationService.config.assetServices ?? '';
      const uri = `${service}tenants/${configurationService.config.tenantId}/GraphQL`;

      return {
        link: httpLink.create({uri: uri}),
        cache: new InMemoryCache({
          dataIdFromObject: (o) => <string>o['rtId'],
        }),
      };
    })
  ]
};

export async function initServices(): Promise<void> {
  const configurationService = inject(ConfigurationService);
  const authorizeService = inject(AuthorizeService);

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

  await authorizeService.initialize(defaultAuthorizeOptions);
}
