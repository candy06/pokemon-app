import { Injectable } from '@angular/core';
import { Pokedex } from '../_models/pokedex';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_models/pokemon';
import { Name } from '../_models/name';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private _http: HttpClient) { }

  getAPIBaseUrl(): string {
    return this.baseUrl;
  }

  convertObjectToPokedex(obj: Object): Pokedex {
    const result: any = <any> obj;
    // Extract id
    const id: number = result.id;
    // Extract names
    let name: string;
    result.names.forEach(data => {
      if (data.language.name === 'en') name = data.name;
    });
    // Extract descriptions
    let description: string;
    result.descriptions.forEach(data => {
      if (data.language.name === 'en') description = data.description;
    });
    // Extract species
    const speciesUrls: Array<string> = [];
    result.pokemon_entries.forEach(data => {
      speciesUrls.push(data.pokemon_species.url);
    });
    // Extract versions
    const versions: Array<string> = [];
    result.version_groups.forEach(data => {
      this._http.get(data.url).subscribe(res => {
        const result: any = <any> res;
        const APIVersions: any = <any> result.versions;
        APIVersions.forEach(data => {
          versions.push(data.name);
        });
      })
    });
    return new Pokedex(id, name, description, speciesUrls, versions);
  }

  converObjectToPokemon(obj: Object): Pokemon {
    const result: any = <any> obj;
    // Extract id
    const id: number = result.id;
    // Extract names
    const names: Array<Name> = [];
    result.names.forEach(data => {
      const name: Name = new Name(data.language.name, data.name);
      names.push(name);
    });

    let pokemon: Pokemon = new Pokemon(id, names);

    // Extract sprite
    const pokemonVarietyUrl = result.varieties[0].pokemon.url;
    this._http.get(pokemonVarietyUrl).subscribe(res => {
      const r: any = <any> res;
      const url: string = r.sprites.front_default;
      pokemon.setImageUrl(url);
    });
    
    return pokemon;
  }

}
