import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { rickrick } from '../models/rickrick.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RicmorService {

  apiUrl: string = 'https://rickandmortyapi.com/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  rickmorDetails: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  
  getrickrick(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/character/`, this.httpOptions)
  }

  doubleId(id: number) {
    id = id * 2;
    return id;
  }
}
