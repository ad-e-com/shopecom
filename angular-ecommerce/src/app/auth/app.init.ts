import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<Boolean> {
    return () =>
      keycloak.init({
        config: {
          realm: 'dev',
          url: 'http://shopecom-service',
          clientId: 'shopecom-client'
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
            checkLoginIframe: true,
            checkLoginIframeInterval: 25
        },
        bearerExcludedUrls: ['/assets', '/clients/public'],
        
        shouldAddToken: (request) => {
          const { method, url } = request;
          
          console.log("request ur:" + url)
          
          const isPostRequest = 'POST' === method.toUpperCase();
          const secureGetPaths = ['findByCustomerEmailOrderByDateCreatedDesc']
          const isSecureGetPath = secureGetPaths.some((path) => url.includes(path));
          console.log("value of isSecureGetPath: " + isSecureGetPath)
          return isPostRequest || isSecureGetPath;
        },
        
        loadUserProfileAtStartUp: true

      });
  }