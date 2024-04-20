using FireGuardians.Models;
using FireGuardians.Services;
using GraphQL;
using Meshmakers.Octo.Runtime.Contracts.Geospatial.Geometry;
using Meshmakers.Octo.Sdk.ServiceClient.AssetRepositoryServices.Tenants;

namespace FireGuardians.Repository.FireReports;

public interface IFireReportsRepository
{
    Task<IReadOnlyCollection<FireReportDto>> GetActiveFireReportsAsync();

    Task<IReadOnlyCollection<FireReportDto>> GetActiveFireReportsByPositionAsync(IPosition position, double? minDistance,
        double? maxDistance);
}

internal class FireReportsRepository(ITenantClient tenantClient, IAuthenticationService authenticationService, ILogger<FireReportsRepository> logger)
    : RepositoryClient(tenantClient, authenticationService, logger), IFireReportsRepository
{
    public async Task<IReadOnlyCollection<FireReportDto>> GetActiveFireReportsAsync()
    {
        var query = new GraphQLRequest
        {
            Query = GraphQl.GetFireReportsQuery,
            Variables = new {  }
        };
        var fireReportDtos = await SendQueryAsync<FireReportDto>(query);

        return fireReportDtos;
    }
    
    public async Task<IReadOnlyCollection<FireReportDto>> GetActiveFireReportsByPositionAsync(IPosition position, double? minDistance, double? maxDistance)
    {
        var query = new GraphQLRequest
        {
            Query = GraphQl.GetFireReportsByPosition,
            Variables = new { position, minDistance, maxDistance }
        };
        var fireReportDtos = await SendQueryAsync<FireReportDto>(query);

        return fireReportDtos;
    }
}