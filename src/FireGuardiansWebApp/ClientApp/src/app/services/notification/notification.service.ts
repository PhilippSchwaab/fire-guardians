import {Injectable} from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {ConfigurationService} from "../configuration/configuration.service";
import {firstValueFrom} from "rxjs";
import {CreateNotificationSubscriptionDtoGQL} from "../../graphQL/createNotificationSubscription";
import {WalletService} from "../wallet/wallet.service";
import {GetWalletSubscriptionDtoGQL} from "../../graphQL/getWalletSubscription";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly swPush: SwPush,
              private readonly walletService: WalletService,
              private readonly configurationService: ConfigurationService,
              private readonly getWalletSubscriptionDtoGQL: GetWalletSubscriptionDtoGQL,
              private readonly createNotificationSubscriptionDtoGQL: CreateNotificationSubscriptionDtoGQL) {
  }

  public async subscribeToNotifications(): Promise<void> {
    try {

      const wallet = await this.walletService.getWallet();
      if (!wallet) {
        console.error('Wallet not found')
        return;
      }
      const subscription = await this.swPush.requestSubscription({
        serverPublicKey: this.configurationService.config.vapidPublicKey
      });
      console.info('Received PushSubscription: ', JSON.stringify(subscription));

      // Ensure that we register the subscription only once
      const r = await firstValueFrom(this.getWalletSubscriptionDtoGQL.fetch({walletRtId: wallet.rtId, endpoint: subscription.endpoint}));
      if (r){
        const subscription = r.data.runtime?.fireGuardiansWallet?.items?.[0]?.children?.fireGuardiansNotificationSubscription?.items?.[0];
        if (subscription) {
          console.info('Subscription already exists');
          return;
        }
      }

      const subscriptionJson = subscription.toJSON();
      if (subscriptionJson && subscriptionJson.keys && subscriptionJson.endpoint) {
        await firstValueFrom(this.createNotificationSubscriptionDtoGQL.mutate({
          config: JSON.stringify(subscriptionJson.keys),
          endpoint: subscriptionJson.endpoint,
          parentWalletRtId: wallet.rtId
        }))

      }

   //   await firstValueFrom(this.httpClient.post('/api/PushSubscriptions', subscription, this.httpOptions));
      console.info('PushSubscription sent to server');

    } catch (e) {
      console.error('Notification permission denied', e);
    }
  }
}
