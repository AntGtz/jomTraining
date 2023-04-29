import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl: string = 'https://rickandmortyapi.com/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  locationDetail: any;

  constructor(
    private httpClient: HttpClient
  ) { }

    getAll(): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}/location/`, this.httpOptions)
    }
    
    read(url: string): Observable<any> {
      return this.httpClient.get(`${url}`)
    }
}
