using System.Text;
using FireGuardians.Models;
using FireGuardians.Repository.FireReports;
using FireGuardians.Repository.Wallets;
using Lib.Net.Http.WebPush;
using Lib.Net.Http.WebPush.Authentication;
using Meshmakers.Common.Shared;
using Microsoft.Extensions.Options;

namespace FireGuardians.Services;

internal class FireNotificationsProducer : BackgroundService
{
    private const int NOTIFICATION_FREQUENCY = 60000;
    private readonly ILogger<FireNotificationsProducer> _logger;
    private readonly PushServiceClient _pushClient;
    private readonly IFireReportsRepository _fireReportsRepository;
    private readonly IWalletRepository _walletRepository;

    public FireNotificationsProducer(ILogger<FireNotificationsProducer> logger,
        IOptions<FireGuardiansOptions> options,
        PushServiceClient pushClient,
        IFireReportsRepository fireReportsRepository, IWalletRepository walletRepository)
    {
        _logger = logger;
        _pushClient = pushClient;
        _fireReportsRepository = fireReportsRepository;
        _walletRepository = walletRepository;
        _pushClient.DefaultAuthentication =
            new VapidAuthentication(options.Value.VapidPublicKey, options.Value.VapidPrivateKey)
            {
                Subject = options.Value.PublicUrl
            };
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            await Task.Delay(NOTIFICATION_FREQUENCY, stoppingToken);

            var walletList = new List<WalletDto>();
            walletList.AddRange(await _walletRepository.GetNewWalletsWithoutNotificationAsync());
            walletList.AddRange(await _walletRepository.GetWalletsNotificationUpdateCandidatesAsync());
            if (!walletList.Any())
            {
                continue;
            }

            foreach (var walletDto in walletList)
            {
                _logger.LogInformation("{RtId} {Location}", walletDto.RtId.ToString(),
                    walletDto.Location.Point.ToString());


                var fireReportDtos =
                    await _fireReportsRepository.GetActiveFireReportsByPositionAsync(
                        walletDto.Location.Point.Coordinates, 0, 10000);
                if (fireReportDtos.Any())
                {
                    _logger.LogInformation("Fire reports found: {FireReports}", fireReportDtos.Count);
                    SendNotifications(walletDto, fireReportDtos, stoppingToken);
                }
            }
            
            await _walletRepository.UpdateWalletNotificationUpdateDateTimeAsync(walletList.Select(w => w.RtId));
        }
    }

    private void SendNotifications(WalletDto walletDto, IReadOnlyCollection<FireReportDto> fireReportDtos,
        CancellationToken stoppingToken)
    {
        if (walletDto.Children.Connection?.Items == null || !walletDto.Children.Connection.Items.Any())
        {
            return;
        }

        StringBuilder message = new StringBuilder();
        message.AppendLine("New fire report detected at:");
        foreach (var fireReportDto in fireReportDtos)
        {
            message.AppendFormat("- at {0}", fireReportDto.Name);
        }

        PushMessage notification = new PushNotification
        {
            Title = "New Fire Report",
            Body = message.ToString(),
            Icon = "assets/icons/icon-96x96.png",
            Actions = new List<PushNotification.NotificationAction>()
                { new("openWindow", "Open") }
        }.ToPushMessage(null, null, PushMessageUrgency.High);

        foreach (var subscription in walletDto.Children.Connection.Items)
        {
            var t = subscription.SubscriptionConfiguration.Deserialize<Dictionary<string, string>>();
            var pushNotification = new PushSubscription
            {
                Endpoint = subscription.Endpoint,
                Keys = t
            };

            // fire-and-forget
            _pushClient.RequestPushMessageDeliveryAsync(pushNotification, notification, stoppingToken);
        }
    }
}