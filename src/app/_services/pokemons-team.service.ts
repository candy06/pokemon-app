import { Injectable } from '@angular/core';
import { PokemonModel } from '../_models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsTeamService {

  private lastPokemonAdded: PokemonModel;
  private team: PokemonModel[] = [];

  constructor() { }

  addPokemonInTeam(pokemon: PokemonModel): void {
    this.lastPokemonAdded = pokemon;
    this.team.push(pokemon);
  }

  getLastAddedPokemon(): PokemonModel {
    return this.lastPokemonAdded;
  }
  
}
