import {
  LogLevel,
  PublicClientApplication,
} from "@azure/msal-browser";

export const getPopupClient = () => {
  const config = {
    auth: {
      authority: `https://login.microsoftonline.com/TENANT_ID`,
      clientId: "APP_ID",
      navigateToLoginRequestUrl: true,
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false,
    },
    system: {
      loggerOptions: {
        loggerCallback: (_: any, msg: string) => console.log(msg),
        logLevel: LogLevel.Verbose,
        piiLoggingEnabled: false,
      },
    },
  };

  return new PublicClientApplication(config);
};
