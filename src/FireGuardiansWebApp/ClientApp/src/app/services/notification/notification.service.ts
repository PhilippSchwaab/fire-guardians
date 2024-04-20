import {Injectable} from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {ConfigurationService} from "../configuration/configuration.service";
import {firstValueFrom} from "rxjs";
import {CreateNotificationSubscriptionDtoGQL} from "../../graphQL/createNotificationSubscription";
import {WalletService} from "../wallet/wallet.service";
import {GetWalletSubscriptionDtoGQL} from "../../graphQL/getWalletSubscription";
import {MessageService} from "@meshmakers/shared-services";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly swPush: SwPush,
              private readonly messageService: MessageService,
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
          this.messageService.showInformation("Notification subscription already exists. You are already subscribed to notifications.");
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

      this.messageService.showInformation("Notification subscription successful");

    } catch (e) {
      this.messageService.showError("Notification subscription failed. Please allow notifications in your browser settings.", "Notification Subscription Error");
    }
  }
}
