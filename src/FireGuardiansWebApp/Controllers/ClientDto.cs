using System.Text.Json.Serialization;
using Meshmakers.Common.Shared;
using Meshmakers.Octo.Communication.Contracts;

namespace FireGuardians.Controllers;

public class ClientDto(string clientId, FireGuardiansOptions fireGuardiansOptions)
{
    [JsonPropertyName("assetServices")] public string AssetServices { get; set; } = fireGuardiansOptions.AssetServiceUrl.EnsureEndsWith("/");

    [JsonPropertyName("issuer")] public string Authority { get; set; } = fireGuardiansOptions.AuthorityUrl.EnsureEndsWith("/");

    [JsonPropertyName("clientId")] public string ClientId { get; set; } = clientId;

    [JsonPropertyName("redirectUri")] public string RedirectUri { get; set; } = fireGuardiansOptions.PublicUrl.EnsureEndsWith("/");

    [JsonPropertyName("postLogoutRedirectUri")]
    public string PostLogoutRedirectUri { get; set; } = fireGuardiansOptions.PublicUrl.EnsureEndsWith("/");

    [JsonPropertyName("scope")] public string Scope { get; set; } = CommonConstants.GetScopes(
        ApiScopes.AssetSystemApiFullAccess, null,
        DefaultScopes.UserDefault | DefaultScopes.OfflineAccess);

    [JsonPropertyName("tenantId")] public string TenantId { get; set; } = fireGuardiansOptions.TenantId;
    [JsonPropertyName("vapidPublicKey")] public string VapidPublicKey { get; set; } = fireGuardiansOptions.VapidPublicKey;
}
