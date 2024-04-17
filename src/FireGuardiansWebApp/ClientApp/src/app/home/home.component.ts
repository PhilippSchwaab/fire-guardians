import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BehaviorSubject, firstValueFrom, lastValueFrom, Observable, of} from "rxjs";
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule, NgOptimizedImage} from "@angular/common";
import {GoogleMap, GoogleMapsModule} from "@angular/google-maps";
import {LocationService} from "../services/location/location.service";
import {Marker} from "../shared/marker";
import {MatProgressBar} from "@angular/material/progress-bar";
import {ConfirmationService} from "@meshmakers/shared-ui";
import {MessageService} from "@meshmakers/shared-services";
import {GetFireReportsDtoGQL} from "../graphQL/getFireReports";
import {CreateFireReportDtoGQL, CreateFireReportMutationVariablesDto} from "../graphQL/createFireReport";
import {MatIcon} from "@angular/material/icon";
import {AuthorizeService} from "@meshmakers/shared-auth";
import {GetWalletDtoGQL} from "../graphQL/getWallet";
import {CreateWalletDtoGQL} from "../graphQL/createWallet";
import {UpdateWalletLocationDtoGQL} from "../graphQL/updateWalletLocation";
import {HOME} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule, HttpClientModule, HttpClientJsonpModule, NgOptimizedImage, GoogleMapsModule, AsyncPipe, MatProgressBar, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @ViewChild(GoogleMap, {static: false}) googleMap?: GoogleMap;

  protected apiLoaded: BehaviorSubject<boolean>;
  protected zoom = 8;
  protected center: google.maps.LatLngLiteral;
  protected newCenter: google.maps.LatLngLiteral;
  protected homeCenter: google.maps.LatLngLiteral | null;
  protected markerPositions: Marker[] = [];
  protected isLoading: boolean = true;
  protected createFireReportEnabled: boolean = false;
  protected newMarkerOptions: google.maps.marker.AdvancedMarkerElementOptions = { gmpDraggable: true};
  protected isAuthenticated: Observable<boolean>;

  //protected markerOptions: google.maps.marker.AdvancedMarkerElementOptions = {gmpDraggable: false};

  constructor(private readonly httpClient: HttpClient,
              private readonly locationService: LocationService,
              private readonly confirmationService: ConfirmationService,
              private readonly messageService: MessageService,
              private readonly getFireReportsDtoGQL: GetFireReportsDtoGQL,
              private readonly createFireReportDtoGQL: CreateFireReportDtoGQL,
              private readonly getWalletDtoGQL: GetWalletDtoGQL,
              private readonly createWallet: CreateWalletDtoGQL,
              private readonly updateWalletLocation: UpdateWalletLocationDtoGQL,
              private readonly authorizeService: AuthorizeService,
              private changeDetector: ChangeDetectorRef) {

    this.apiLoaded = new BehaviorSubject<boolean>(false);
    this.center = {lat: 49.843, lng: 9.902056}; // 49.843, 9.902056
    this.homeCenter = null;
    this.newCenter = {lat: 49.843, lng: 9.902056};
    this.isAuthenticated = of(false);
  }

  async ngOnInit(): Promise<void> {

    this.isAuthenticated = this.authorizeService.getIsAuthenticated();

    try {
      const position = await this.locationService.getCurrentLocation();
      this.center = {lat: position.latitude, lng: position.longitude};
      this.homeCenter = this.center;
      this.newCenter = this.center;
    } catch (e) {
      console.error('HomeComponent.ngOnInit() - e: ', e);
    }

    // This code create a wallet for the user with the current location
    const u = await firstValueFrom(this.authorizeService.getUser());
    if (u && this.homeCenter) {
      const id = (<any>u).sub;

      const x = await firstValueFrom(this.getWalletDtoGQL.fetch({identityId: id}));
      if (x.data.runtime?.fireGuardiansWallet?.items?.length) {
        const rtId = x.data.runtime?.fireGuardiansWallet.items[0]?.rtId;
        if (rtId) {

          await firstValueFrom(this.updateWalletLocation.mutate({
            rtId: rtId, position: {latitude: this.homeCenter.lat, longitude: this.homeCenter.lng}
          }));
        }
      } else {
        await firstValueFrom(this.createWallet.mutate({
          walletInput:
            {
              identityId: id,
              name: u.name,
              location:
                {
                  coordinates: {latitude: this.homeCenter.lat, longitude: this.homeCenter.lng}
                }
            }
        }));
      }
    }

    try {
      await lastValueFrom(this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyA2Q1cbgqajUzh0P9BIHufleusf3HSu9sY', 'callback'));
      this.apiLoaded.next(true);
      this.isLoading = false;
    } catch (e) {
      console.error('HomeComponent.ngOnInit() - e: ', e);
    }
  }

  async loadMarkers(): Promise<void> {

    if (!this.googleMap) {
      console.error("map not loaded.");
      return;
    }

    const bounds = this.googleMap.getBounds();
    if (bounds) {
      this.isLoading = true;
      const ne = bounds.getNorthEast(); // northeast corner
      const sw = bounds.getSouthWest(); // southwest corner
      const dist = this.calculateDistance(ne, sw);
      const c = bounds.getCenter();
      try {
        const r = await firstValueFrom(this.getFireReportsDtoGQL.fetch({
          position: {
            latitude: c.lat(),
            longitude: c.lng()
          },
          maxDistance: dist / 2
        }));
        this.markerPositions = [];
        r.data.runtime?.fireGuardiansFireReport?.items?.forEach((item) => {
          if (item) {
            this.markerPositions.push(<Marker>
              {
                position: {
                  lat: item.location?.point?.coordinates?.latitude ?? 0,
                  lng: item.location?.point?.coordinates?.longitude ?? 0
                },
                options: {
                  title: item.name
                }
              });

          }
        });
      } catch (e) {
        console.error('HomeComponent.ngOnInit() - e: ', e);
      }
      this.isLoading = false;
    }


  }

  mapInitialized($event: google.maps.Map) {
    this.changeDetector.detectChanges();
    this.googleMap?.boundsChanged.subscribe(async () => {
      await this.loadMarkers();
    });
  }

  calculateDistance(point1: google.maps.LatLng, point2: google.maps.LatLng): number {
    const R = 6371e3; // Radius of earth in meter
    const lat1 = this.radians(point1.lat());
    const lat2 = this.radians(point2.lat());
    const deltaLat = this.radians(point2.lat() - point1.lat());
    const deltaLng = this.radians(point2.lng() - point1.lng());

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meter
  }

  radians(degrees: number): number {
    return degrees * Math.PI / 180;
  }

  createFireReport() {
    this.createFireReportEnabled = true;
  }

  public onDragend(event: any){
    this.newCenter = {lat: event.latLng.lat(), lng: event.latLng.lng()};
  }

  async confirmFireReport() : Promise<void> {

    const confirmResult = await firstValueFrom(
      this.confirmationService.showYesNoConfirmationDialog(
        'Report fire',
        `Do you really want to report fire at this location?`
      )
    );

    if (confirmResult) {

      const geo = await this.locationService.getLocationName(new google.maps.LatLng(this.newCenter.lat, this.newCenter.lng));
      const v = <CreateFireReportMutationVariablesDto>{
        position: {latitude: this.newCenter.lat, longitude: this.newCenter.lng},
        name: geo,
        description: ""
      };

      const r = await firstValueFrom(this.createFireReportDtoGQL.mutate(v));
      const entity = r.data?.runtime?.fireGuardiansFireReports?.create?.at(0);
      if (entity) {
        this.markerPositions.push(<Marker>
          {
            position: {
              lat: entity.location?.point?.coordinates?.latitude ?? 0,
              lng: entity.location?.point?.coordinates?.longitude ?? 0
            },
            options: {
              title: entity.name
            }
          });

        this.createFireReportEnabled = false;
        this.newCenter = this.center;
        this.messageService.showInformation('Fire report created');
     }
    }
  }

  public login(): void {
    this.authorizeService.login();
  }

  protected readonly HOME = HOME;
}
