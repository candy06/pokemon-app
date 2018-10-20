import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Pokedex } from '../_models/pokedex';
import { HttpClient } from '@angular/common/http';
import { PokedexModel } from '../_models/pokedex-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokedexes: Array<Pokedex> = [];

  constructor(private _common: CommonService, private _http: HttpClient) { }

  fetchPokedexModels(): Array<PokedexModel> {
    const pokedexes: Array<PokedexModel> = [];
    for (let i = 1 ; i < 10 ; i++) {
      const url = this._common.getAPIBaseUrl() + 'pokedex/' + i + '/';
      this._http.get(url).subscribe(obj => {
        const pokedexModel: PokedexModel = this._common.convertObjectToPokedexModel(obj);
        //pokedexes.splice(pokedexModel.id - 1, 0, pokedexModel);
        pokedexes.push(pokedexModel);
      })
    }
    return pokedexes;
  }

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
