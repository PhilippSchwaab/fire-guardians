import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BehaviorSubject, catchError, firstValueFrom, lastValueFrom, map, Observable, of} from "rxjs";
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule, NgOptimizedImage} from "@angular/common";
import {GoogleMap, MapMarker} from "@angular/google-maps";
import {LocationService} from "../services/location/location.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule, HttpClientModule, HttpClientJsonpModule, NgOptimizedImage, GoogleMap, MapMarker, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  protected apiLoaded: BehaviorSubject<boolean>;
  protected zoom = 8;
  protected center: google.maps.LatLngLiteral;

  constructor(private readonly httpClient: HttpClient, private readonly locationService: LocationService) {

    console.info('HomeComponent.constructor()');
    this.apiLoaded = new BehaviorSubject<boolean>(false);
    this.center = {lat: 0, lng: 0};
  }

  async ngOnInit(): Promise<void> {
    console.info('HomeComponent.ngOnInit()');

    const position = await this.locationService.getCurrentLocation();
    console.log(position);
    this.center = {lat: position.latitude, lng: position.longitude};

    try {
      await lastValueFrom(this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyA2Q1cbgqajUzh0P9BIHufleusf3HSu9sY', 'callback'));
      this.apiLoaded.next(true);
    } catch (e) {
      console.error('HomeComponent.ngOnInit() - e: ', e);
    }
  }

}
