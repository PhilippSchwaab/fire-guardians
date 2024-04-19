import { Injectable } from '@angular/core';
import {SwPush} from "@angular/service-worker";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly swPush: SwPush) { }

  public async subscribeToNotifications() : Promise<void> {
    try {
      await this.swPush.requestSubscription({
        serverPublicKey: 'BBOj-esXJSfksOSFWd06_dDOletUn3XRvzY4IsOYSb_1ora5Vdi8SrmOAWya1g9vZcPhq-lGu_wWocEoBRID5Pk'
      });
    } catch (e){
      console.error('Notification permission denied', e);
    }
  }
}
