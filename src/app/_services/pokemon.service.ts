import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_models/pokemon';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { PokemonModel } from '../_models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: Array<Pokemon> = [];
  private pokemonModels: Array<PokemonModel> = [];

  constructor(private _http: HttpClient, private _common: CommonService) { }

  getPokemonModels(): Array<PokemonModel> {
    return this.pokemonModels.slice(0, 10);
  }

  getPokemonModelsPromise(urls: Array<string>, pokemonNumber: number) {
    this.pokemonModels.length = 0;
    let promise = new Promise((resolve, reject) => {
      urls.forEach(url => {
        this._http.get(url)
        .toPromise()
        .then(
          res => { // Success
            const pokemonModel: PokemonModel = this._common.convertObjectToPokemonModel(res);
            this.pokemonModels.push(pokemonModel);
            if (this.pokemonModels.length === pokemonNumber) resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
      });
      
    });
    return promise;
  }

  fetchPokemons(urls: Array<string>, pokemonNumber: number) {
    this.pokemons.length = 0;
    let promise = new Promise((resolve, reject) => {
      urls.forEach(url => {
        this._http.get(url)
        .toPromise()
        .then(
          res => { // Success
            const pokemon: Pokemon = this._common.converObjectToPokemon(res);
            this.pokemons.push(pokemon);
            if (this.pokemons.length == pokemonNumber) resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
      });
      
    });
    return promise;
  }

  getPokemons(): Array<Pokemon> {
    return this.pokemons;
  }

  fetchPokemonAPI(urls: Array<string>): Array<Pokemon> {
    let pokemons: Array<Pokemon> = [];
    urls.forEach(url => {
      this._http.get<Pokemon>(url).subscribe(data => {
        const pokemon: Pokemon = this._common.converObjectToPokemon(data);
        pokemons.push(pokemon);
      })
    });
    return pokemons;
  }
  

}
