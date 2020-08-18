import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Poke} from '../_models/pokemon';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Lista} from '../_models/lista';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(pokemon: string): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  getPokemonByLink(link: string): Observable<Poke>{
    return this.http.get<Poke>(link);
  }

  getList(page: number): Observable<Lista>{
    return this.http.get<Lista>(this.baseUrl + '?limit=20&offset=' + page*20);
  }
}
