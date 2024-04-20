using System.Text.Json.Serialization;
using Meshmakers.Octo.Communication.Contracts.DataTransferObjects;

namespace FireGuardians.Models;

/// <summary>
/// Represents a fire report
/// </summary>
public class FireReportDto : NamedEntityDto
{
    /// <summary>
    /// Location of fire
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
    public RtGeospatialValueDto Location { get; set; } = default!;
}