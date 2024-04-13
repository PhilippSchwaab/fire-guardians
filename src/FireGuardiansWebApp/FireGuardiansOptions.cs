using System.Diagnostics;

namespace FireGuardians;

public class FireGuardiansOptions
{
    public string AssetServiceUrl { get; set; } = "https://localhost:5001";
    public string AuthorityUrl { get; set; } = "https://localhost:5003";
    public string PublicUrl { get; set; } = Debugger.IsAttached ? "https://localhost:44486" : "https://localhost:7171";
    public string TenantId { get; set; } = "meshtest";
}
