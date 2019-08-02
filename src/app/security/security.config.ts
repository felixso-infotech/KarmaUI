import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // Url of the Identity Provider
    issuer: 'http://35.196.86.249:8080/auth/realms/karma',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin+'/tabs',

    loginUrl:'http://35.196.86.249:8080/auth/realms/karma/protocol/openid-connect/auth',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'karma',

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email',

    dummyClientSecret: '5f6dc31d-8834-44a2-b590-59ccf90aacdc',
    tokenEndpoint: 'http://35.196.86.249:8080/auth/realms/karma/protocol/openid-connect/token',
    userinfoEndpoint: 'http://35.196.86.249:8080/auth/realms/karma/protocol/openid-connect/userinfo',
    oidc: true,
    requireHttps: false
}
