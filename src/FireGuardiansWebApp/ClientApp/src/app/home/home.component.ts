import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BehaviorSubject, firstValueFrom, lastValueFrom} from "rxjs";
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule, NgOptimizedImage} from "@angular/common";
import {GoogleMap, GoogleMapsModule} from "@angular/google-maps";
import {LocationService} from "../services/location/location.service";
import {GetRestaurantsDtoGQL} from "../graphQL/getRestaurants";
import {Marker} from "../shared/marker";
import {CreateRestaurantDtoGQL, CreateRestaurantMutationVariablesDto} from "../graphQL/createRestaurant";
import {MatProgressBar} from "@angular/material/progress-bar";
import {ConfirmationService} from "@meshmakers/shared-ui";
import {MessageService} from "@meshmakers/shared-services";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule, HttpClientModule, HttpClientJsonpModule, NgOptimizedImage, GoogleMapsModule, AsyncPipe, MatProgressBar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @ViewChild(GoogleMap, {static: false}) googleMap?: GoogleMap;

  protected apiLoaded: BehaviorSubject<boolean>;
  protected zoom = 8;
  protected center: google.maps.LatLngLiteral;
  protected markerPositions: Marker[] = [];
  protected isLoading: boolean = true;

  //protected markerOptions: google.maps.marker.AdvancedMarkerElementOptions = {gmpDraggable: false};

  constructor(private readonly httpClient: HttpClient,
              private readonly locationService: LocationService,
              private readonly confirmationService: ConfirmationService,
              private readonly messageService: MessageService,
              private readonly getRestaurantsDtoGQL: GetRestaurantsDtoGQL,
              private readonly createRestaurantDtoGQL: CreateRestaurantDtoGQL,
              private changeDetector: ChangeDetectorRef) {

    this.apiLoaded = new BehaviorSubject<boolean>(false);
    this.center = {lat: 0, lng: 0};
  }

  async ngOnInit(): Promise<void> {

    try {
      const position = await this.locationService.getCurrentLocation();
      this.center = {lat: position.latitude, lng: position.longitude};
    } catch (e) {
      console.error('HomeComponent.ngOnInit() - e: ', e);
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
      const ne = bounds.getNorthEast(); // Nordost-Ecke
      const sw = bounds.getSouthWest(); // Südwest-Ecke
      const dist = this.calculateDistance(ne, sw);
      const c = bounds.getCenter(); // Südwest-Ecke
      try {
        const r = await firstValueFrom(this.getRestaurantsDtoGQL.fetch({
          position: {
            latitude: c.lat(),
            longitude: c.lng()
          },
          maxDistance: dist / 2
        }));
        this.markerPositions = [];
        r.data.runtime?.fireGuardiansRestaurant?.items?.forEach((item) => {
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

  async click(event: google.maps.MapMouseEvent): Promise<void> {
    console.log(event, this.googleMap);

    const confirmResult = await firstValueFrom(
      this.confirmationService.showYesNoConfirmationDialog(
        'Create Restaurant',
        `Do you really want to create a restaurant at this location?`
      )
    );

    if (confirmResult) {
      const v = <CreateRestaurantMutationVariablesDto>{
        position: {latitude: event.latLng?.lat(), longitude: event.latLng?.lng()},
        name: "demo",
        description: "demo"
      };

      const r = await firstValueFrom(this.createRestaurantDtoGQL.mutate(v));
      const entity = r.data?.runtime?.fireGuardiansRestaurants?.create?.at(0);
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

        this.messageService.showInformation('Restaurant created');
      }
    }
  }

  mapInitialized($event: google.maps.Map) {
    this.changeDetector.detectChanges();
    this.googleMap?.boundsChanged.subscribe(async () => {
      await this.loadMarkers();
    });
  }

  calculateDistance(point1: google.maps.LatLng, point2: google.maps.LatLng): number {
    const R = 6371e3; // Erdradius in Metern
    const lat1 = this.radians(point1.lat());
    const lat2 = this.radians(point2.lat());
    const deltaLat = this.radians(point2.lat() - point1.lat());
    const deltaLng = this.radians(point2.lng() - point1.lng());

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distanz in Metern
  }

  radians(degrees: number): number {
    return degrees * Math.PI / 180;
  }
}
