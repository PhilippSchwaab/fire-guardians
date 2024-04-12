import { Injectable } from '@angular/core';
import {XLocation} from "../../models/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() {}

  public getCurrentLocation() : Promise<XLocation> {

    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              console.log(
                'Latitude: ' +
                position.coords.latitude +
                'Longitude: ' +
                position.coords.longitude
              );
              let lat = position.coords.latitude;
              let lng = position.coords.longitude;

              resolve(<XLocation>{latitude: lat, longitude: lng});
            }
          },
          (error) => console.log(error)
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }
}
