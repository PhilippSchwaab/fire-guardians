import {Injectable} from '@angular/core';
import {AuthorizeService} from "@meshmakers/shared-auth";
import {firstValueFrom} from "rxjs";
import {GetWalletDtoGQL} from "../../graphQL/getWallet";
import {CreateWalletDtoGQL} from "../../graphQL/createWallet";
import {UpdateWalletLocationDtoGQL} from "../../graphQL/updateWalletLocation";
import {FireGuardiansWalletDto} from "../../graphQL/globalTypes";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
    private readonly getWalletDtoGQL: GetWalletDtoGQL,
    private readonly createWallet: CreateWalletDtoGQL,
    private readonly updateWalletLocation: UpdateWalletLocationDtoGQL,
    private readonly authorizeService: AuthorizeService) {

  }

  async createUpdateWalletLocation(homeCenter: google.maps.LatLngLiteral): Promise<void> {
    // This code create a wallet for the user with the current location
    const wallet = await this.getWallet();
    if (wallet) {
      await firstValueFrom(this.updateWalletLocation.mutate({
        rtId: wallet.rtId, position: {latitude: homeCenter.lat, longitude: homeCenter.lng}
      }));
    } else {
      const u = await firstValueFrom(this.authorizeService.getUser());
      if (u) {
        const id = (<any>u).sub;

        await firstValueFrom(this.createWallet.mutate({
          walletInput:
            {
              identityId: id,
              name: u.name,
              location:
                {
                  coordinates: {latitude: homeCenter.lat, longitude: homeCenter.lng}
                }
            }
        }));
      }
    }
  }

  async getWallet(): Promise<FireGuardiansWalletDto | null> {
    const u = await firstValueFrom(this.authorizeService.getUser());
    if (u) {
      const id = (<any>u).sub;

      const apolloQueryResult = await firstValueFrom(this.getWalletDtoGQL.fetch({identityId: id}));
      if (apolloQueryResult.data.runtime?.fireGuardiansWallet?.items?.length) {
        return apolloQueryResult.data.runtime?.fireGuardiansWallet.items[0];
      }
    }
    return null;
  }
}
