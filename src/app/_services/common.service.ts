import { Injectable } from '@angular/core';
import { Pokedex } from '../_models/pokedex';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_models/pokemon';
import { Name } from '../_models/name';
import { PokemonStatistic } from '../_models/pokemon-statistic';
import { PokemonType } from '../_models/pokemon-type';
import { PokedexModel } from '../_models/pokedex-model';
import { PokemonEntryModel } from '../_models/pokemon-entry-model';
import { PokemonModel } from '../_models/pokemon-model';
import { NameModel } from '../_models/name-model';
import { DescriptionModel } from '../_models/description-model';
import { PokemonTypeModel } from '../_models/pokemon-type-model';
import { PokemonStatModel } from '../_models/pokemon-stat-model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private _http: HttpClient) { }

  getAPIBaseUrl(): string {
    return this.baseUrl;
  }

  convertObjectToPokemonModel(object: Object): PokemonModel {
    const data: any = object as any;
    // Extract names
    let names: Array<NameModel> = [];
    data.names.forEach(elt => {
      const nameModel: NameModel = new NameModel(elt.name, elt.language.name);
      names.push(nameModel);
    });
    // Extract descriptions
    let descriptions: Array<DescriptionModel> = [];
    data.flavor_text_entries.forEach(elt => {
      const descriptionModel: DescriptionModel = new DescriptionModel(elt.flavor_text, elt.language.name);
      descriptions.push(descriptionModel);
    });

    let pokemonModel: PokemonModel = new PokemonModel(names, descriptions);

    // Url to have more details on the pokemon
    const pokemonVarietyUrl = data.varieties[0].pokemon.url;
    this._http.get(pokemonVarietyUrl).subscribe((res: any) => {
      // Extract sprite
      pokemonModel.sprite = res.sprites.front_default;
      // Extract types
      let types: Array<PokemonTypeModel> = [];
      res.types.forEach(elt => {
        const type: PokemonTypeModel = new PokemonTypeModel(elt.type.name, elt.slot);
        types.push(type);
      });
      pokemonModel.types = types;
      // Extract stats
      let stats: Array<PokemonStatModel> = [];
      res.stats.forEach(elt => {
        const stat: PokemonStatModel = new PokemonStatModel(elt.stat.name, elt.base_stat);
        stats.push(stat);
      });
      pokemonModel.stats = stats;
      // Extract abilities
      let abilities: string[] = [];
      res.abilities.forEach(elt => {
        abilities.push(elt.ability.name);
      });
      pokemonModel.abilities = abilities;
      // Extract moves
      let moves: string[] = [];
      res.moves.forEach(elt => {
        moves.push(elt.move.name);
      });
      pokemonModel.moves = moves;
    });


    return pokemonModel;
  }

  convertObjectToPokedexModel(object: Object): PokedexModel {
    const data: any = object as any;
    // Extract id
    const id: number = data.id;
    // Extract names
    let names: Array<NameModel> = [];
    data.names.forEach(elt => {
      const pokedexNameModel: NameModel = new NameModel(elt.name, elt.language.name);
      names.push(pokedexNameModel);
    });
    // Extract descriptions
    let descriptions: Array<DescriptionModel> = [];
    data.descriptions.forEach(elt => {
      const pokedexDescriptionModel: DescriptionModel = new DescriptionModel(elt.description, elt.language.name);
      descriptions.push(pokedexDescriptionModel);
    });
    // Extract pokemon entries
    let pokemonEntries: Array<PokemonEntryModel> = [];
    data.pokemon_entries.forEach(elt => {
      const pokemonEntryModel: PokemonEntryModel = new PokemonEntryModel(elt.entry_number, elt.pokemon_species.url);
      pokemonEntries.push(pokemonEntryModel);
    })
    return new PokedexModel(id, names, descriptions, pokemonEntries);
  }

  convertObjectToPokedex(obj: Object): Pokedex {
    const result: any = <any>obj;
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
        const result: any = <any>res;
        const APIVersions: any = <any>result.versions;
        APIVersions.forEach(data => {
          versions.push(data.name);
        });
      })
    });
    return new Pokedex(id, name, description, speciesUrls, versions);
  }

  converObjectToPokemon(obj: Object): Pokemon {
    const result: any = <any>obj;
    // Extract id
    const id: number = result.id;
    // Extract order
    const order: number = result.order;
    // Extract names
    const names: Array<Name> = [];
    result.names.forEach(data => {
      const name: Name = new Name(data.language.name, data.name);
      names.push(name);
    });

    let pokemon: Pokemon = new Pokemon(id, order, names);

    // Extract sprite
    const pokemonVarietyUrl = result.varieties[0].pokemon.url;
    this._http.get(pokemonVarietyUrl).subscribe(res => {
      const r: any = <any>res;
      const url: string = r.sprites.front_default;
      pokemon.setImageUrl(url);
      const statistics: Array<PokemonStatistic> = [];
      r.stats.forEach(statistic => {
        statistics.push(new PokemonStatistic(statistic.stat.name, statistic.base_stat));
      });
      pokemon.setStatistics(statistics);
      const types: Array<PokemonType> = [];
      r.types.forEach(type => {
        types.push(new PokemonType(type.type.name, type.slot));
      });
      pokemon.setTypes(types);
    });

    return pokemon;
  }

}
