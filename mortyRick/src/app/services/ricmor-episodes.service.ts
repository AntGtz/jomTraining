import { Injectable } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { mortymorty } from '../models/mortymorty.model';

@Injectable({
  providedIn: 'root'
})
export class RicmorEpisodesService {
  apiUrl: string = 'https://rickandmortyapi.com/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  rickmorDetailsepi: any;

  constructor(
    private httpClient: HttpClient
    ) { }
    getmortymorty(): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}/location/`, this.httpOptions)
    }
  
    doubleId(id: number) {
      id = id * 2;
      return id;
    }
}
