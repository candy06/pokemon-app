import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Pokedex } from '../_models/pokedex';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokedexes: Array<Pokedex> = [];

  constructor(private _common: CommonService, private _http: HttpClient) { }

  fetchPokedexesAPI(): Array<Pokedex> {
    for (let i = 1; i < 10; i++) {
      const url = this._common.getAPIBaseUrl() + 'pokedex/' + i + '/';
      this._http.get(url).subscribe(data => {
        const pokedex: Pokedex = this._common.convertObjectToPokedex(data);
        this.pokedexes.splice(pokedex.id - 1, 0, pokedex);
      });
    }
    return this.pokedexes;
  }

  getPokedexes(): Array<Pokedex> {
    return this.pokedexes;
  }

  getSpecificPokedex(id: number): Pokedex {
    const pokedex: Pokedex[] = this.pokedexes.filter(
      data => data.id === id
    );
    return pokedex[0];
  }

}
