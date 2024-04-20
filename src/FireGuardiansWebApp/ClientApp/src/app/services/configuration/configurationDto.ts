export interface ConfigurationDto {
  assetServices: string;
  issuer: string;
  clientId: string;
  redirectUri: string;
  postLogoutRedirectUri: string;
  scope: string;
  tenantId: string;
  vapidPublicKey: string;
}
