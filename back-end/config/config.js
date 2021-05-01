exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',

    clientID: 'c64ee9d0-24ec-4900-a7ad-decee59a336c',

    clientSecret: 'Td2-8.R5QND.D__gtujwLA-6w2M4_aZJO9',

    responseType: 'code id_token',

    responseMode: 'form_post',

    redirectUrl: 'http://localhost:3005/auth/openid/return',

    allowHttpForRedirectUrl: true,

    validateIssuer: false,

    issuer: null,

    passReqToCallback: false,

    useCookieInsteadOfSession: false,

    cookieEncryptionKeys: [
      { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
      { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],

    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],

    loggingLevel: false,

    nonceLifetime: null,

    nonceMaxAmount: 5,

    clockSkew: null,
  };

  exports.destroySessionUrl = 'http://localhost:3005';

  exports.useMongoDBSessionStore = false;

  exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

  exports.mongoDBSessionMaxAge = 24 * 60 * 60;
