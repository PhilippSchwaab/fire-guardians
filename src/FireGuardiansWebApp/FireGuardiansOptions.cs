using System.Diagnostics;

namespace FireGuardians;

public class FireGuardiansOptions
{
    public FireGuardiansOptions()
    {
        AssetServiceUrl = "https://localhost:5001";
        BotServiceUrl = "https://localhost:5009";
        CommunicationServiceUrl = "https://localhost:5015";
        AuthorityUrl = "https://localhost:5003";
        PublicUrl = Debugger.IsAttached ? "https://localhost:44483" : "https://localhost:5005";
        TenantId = "octosystem";
    }

    public string AssetServiceUrl { get; set; }
    public string BotServiceUrl { get; set; }
    public string CommunicationServiceUrl { get; set; }
    public string AuthorityUrl { get; set; }
    public string PublicUrl { get; set; }
    public string TenantId { get; set; }
}
