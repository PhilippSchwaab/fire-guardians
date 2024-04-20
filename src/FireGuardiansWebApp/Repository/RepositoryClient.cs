using FireGuardians.Services;
using GraphQL;
using Meshmakers.Octo.Sdk.ServiceClient.AssetRepositoryServices.Tenants;

namespace FireGuardians.Repository;

internal class RepositoryClient(
    ITenantClient tenantClient,
    IAuthenticationService authenticationService,
    ILogger<RepositoryClient> logger)
{
    internal async Task<IReadOnlyCollection<TResponse>> SendQueryAsync<TResponse>(GraphQLRequest query) where TResponse : class
    {
        logger.LogTrace("Sending query to GraphQL endpoint: {Query}", query.Query);
        logger.LogTrace("Query variables: {Variables}", query.Variables);
        
        await authenticationService.EnsureAuthenticated(tenantClient.AccessToken);

        var result = await tenantClient.SendQueryAsync<TResponse>(query);
        if (result?.Items == null)
        {
            throw RepositoryException.QueryReturnedEmptyResultFailed();
        }
        logger.LogTrace("Query sent successfully. ");
        return result.Items.ToList();
    }

    internal async Task<TResponse> SendMutationAsync<TResponse>(GraphQLRequest query) where TResponse : class
    {
        logger.LogTrace("Sending mutation to GraphQL endpoint: {Query}", query.Query);
        logger.LogTrace("Query variables: {Variables}", query.Variables);

        await authenticationService.EnsureAuthenticated(tenantClient.AccessToken);

        var result = await tenantClient.SendMutationAsync<TResponse>(query);
        logger.LogTrace("Mutation sent successfully. ");
        return result;
    }
    
    internal async Task<IEnumerable<TResponse>> SendMutationsAsync<TResponse>(GraphQLRequest query) where TResponse : class
    {
        logger.LogTrace("Sending mutation to GraphQL endpoint: {Query}", query.Query);
        logger.LogTrace("Query variables: {Variables}", query.Variables);

        await authenticationService.EnsureAuthenticated(tenantClient.AccessToken);

        var result = await tenantClient.SendMutationsAsync<TResponse>(query);
        if (result == null)
        {
            throw RepositoryException.MutationReturnedEmptyResultFailed();
        }
        logger.LogTrace("Mutation sent successfully. ");
        return result;
    }
}