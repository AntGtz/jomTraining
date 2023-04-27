import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl: string = 'https://rickandmortyapi.com/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  pokemonDetails: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  
  getPokemon(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/character/`, this.httpOptions)
  }

  doubleId(id: number) {
    id = id * 2;
    return id;
  }
}
