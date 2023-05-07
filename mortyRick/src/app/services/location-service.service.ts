import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {
  lat: number = 0;
  lng: number = 0;

  updateLocation2(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
  constructor() { }
}
