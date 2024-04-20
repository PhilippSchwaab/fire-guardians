using FireGuardians.Models;
using FireGuardians.Services;
using GraphQL;
using Meshmakers.Octo.Communication.Contracts.DataTransferObjects;
using Meshmakers.Octo.ConstructionKit.Contracts;
using Meshmakers.Octo.Sdk.ServiceClient.AssetRepositoryServices.Tenants;

namespace FireGuardians.Repository.Wallets;

internal interface IWalletRepository
{
    Task<WalletDto> GetWalletSubscriptionAsync(Guid walletId, string endpoint);

    Task<IReadOnlyCollection<WalletDto>> GetNewWalletsWithoutNotificationAsync();
    Task<IReadOnlyCollection<WalletDto>> GetWalletsNotificationUpdateCandidatesAsync();

    Task<IEnumerable<WalletDto>> UpdateWalletNotificationUpdateDateTimeAsync(IEnumerable<OctoObjectId> walletRtIds);
}

internal class WalletRepository(ITenantClient tenantClient, IAuthenticationService authenticationService, ILogger<WalletRepository> logger)
    : RepositoryClient(tenantClient, authenticationService, logger), IWalletRepository
{
    public async Task<WalletDto> GetWalletSubscriptionAsync(Guid walletId, string endpoint)
    {
        var query = new GraphQLRequest
        {
            Query = GraphQl.GetWalletSubscription,
            Variables = new { walletId, endpoint }
        };
        var walletDto = await SendQueryAsync<WalletDto>(query);
        if (!walletDto.Any())
        {
            throw RepositoryException.QueryReturnedEmptyResultFailed();
        }

        return walletDto.First();
    }
    
    public async Task<IReadOnlyCollection<WalletDto>> GetWalletsNotificationUpdateCandidatesAsync()
    {
        var query = new GraphQLRequest
        {
            Query = GraphQl.GetWalletsNotificationUpdateCandidates,
            Variables = new {  }
        };
        var walletDtos = await SendQueryAsync<WalletDto>(query);

        return walletDtos;
    }
    
    public async Task<IReadOnlyCollection<WalletDto>> GetNewWalletsWithoutNotificationAsync()
    {
        var query = new GraphQLRequest
        {
            Query = GraphQl.GetNewWallets,
            Variables = new {  }
        };
        var walletDtos = await SendQueryAsync<WalletDto>(query);

        return walletDtos;
    }
    
    public async Task<IEnumerable<WalletDto>> UpdateWalletNotificationUpdateDateTimeAsync(IEnumerable<OctoObjectId> walletRtIds)
    {
        var updates = new List<MutationDto<WalletDto>>();
        foreach (var walletRtId in walletRtIds)
        {
            var walletDto = new WalletDto { LastNotificationUpdate = DateTime.UtcNow };
            var update = new MutationDto<WalletDto> { RtId = walletRtId, Item = walletDto };
            updates.Add(update);
        }
        
        var query = new GraphQLRequest
        {
            Query = GraphQl.UpdateWalletNotificationUpdateDateTimeMutation,
            Variables = new { updates }
        };
        var walletDtos = await SendMutationsAsync<WalletDto>(query);

        return walletDtos;
    }
}

