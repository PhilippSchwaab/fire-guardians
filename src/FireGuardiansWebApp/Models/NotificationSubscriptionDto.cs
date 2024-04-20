using System.Text.Json.Serialization;
using Meshmakers.Octo.Communication.Contracts.DataTransferObjects;

namespace FireGuardians.Models;

/// <summary>
/// Represents the active payment option - so how the member has defined to pay for an article
/// </summary>
public class NotificationSubscriptionDto : RtEntityDto
{
    /// <summary>
    /// Endpoint to send the notification to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
    public string Endpoint { get; set; } = default!;
    
    /// <summary>
    /// Content of the subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
    public string SubscriptionConfiguration { get; set; } = default!;
}