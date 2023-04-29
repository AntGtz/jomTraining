import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Character } from '../models/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

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

  
  getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/character/`, this.httpOptions)
  }

}
