export default {

    oidc: {
        clientId: '0oae0pz17bjxpOSF65d7',
        issuer: 'https://dev-95148257.okta.com/oauth2/default',
        // redirectUri: 'https://localhost:4200/login/callback',
        // redirectUri: 'http://localhost:4200/login/callback',
        redirectUri: 'http://localhost/login/callback',
        // redirectUri: 'http://shopecom.com/login/callback',
        // redirectUri: window.location.origin + '/callback',
        scopes: ['openid', 'profile', 'email']
    }

}
