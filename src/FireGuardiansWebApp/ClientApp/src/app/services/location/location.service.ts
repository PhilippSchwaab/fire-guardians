import {Injectable} from '@angular/core';
import {XLocation} from "../../models/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() {
  }

  public getCurrentLocation(): Promise<XLocation> {

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


  public async getLocationName(lngLat: google.maps.LatLng): Promise<string> {
    let geocoder = new google.maps.Geocoder();
    let locationName = '';

    const response = await geocoder.geocode({location: lngLat});
    if (response.results[0]) {
      locationName = response.results[0].formatted_address;
    } else {
      locationName = 'Unknown location';
    }
    return locationName;
  }
}
