import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BehaviorSubject, catchError, firstValueFrom, lastValueFrom, map, Observable, of} from "rxjs";
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule, NgOptimizedImage} from "@angular/common";
import {GoogleMap, MapMarker} from "@angular/google-maps";

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

  constructor(private readonly httpClient: HttpClient) {

    console.info('HomeComponent.constructor()');
    this.apiLoaded = new BehaviorSubject<boolean>(false);
  }

  async ngOnInit(): Promise<void> {
    console.info('HomeComponent.ngOnInit()');

    try {
      await lastValueFrom(this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyA2Q1cbgqajUzh0P9BIHufleusf3HSu9sY', 'callback'));
      this.apiLoaded.next(true);
    } catch (e) {
      console.error('HomeComponent.ngOnInit() - e: ', e);
    }
  }

}
