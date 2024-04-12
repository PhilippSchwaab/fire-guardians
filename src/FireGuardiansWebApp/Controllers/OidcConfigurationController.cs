using System.Diagnostics;
using Meshmakers.Octo.Communication.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace FireGuardians.Controllers;

[AllowAnonymous]
public class OidcConfigurationController(IOptions<FireGuardiansOptions> options) : ControllerBase
{
    private readonly FireGuardiansOptions _options = options.Value;

    [HttpGet("_configuration")]
    public IActionResult GetClientRequestParameters()
    {
        var clientId = Debugger.IsAttached
            ? FireGuardiansConstants.FireGuardiansAppClientIdDebug
            : FireGuardiansConstants
                .FireGuardiansAppClientId;

        var clientDto = new ClientDto(clientId, _options);
        return Ok(clientDto);
    }
}
