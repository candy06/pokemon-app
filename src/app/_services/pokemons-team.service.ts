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

  isInTeam(pokemon: PokemonModel): boolean {
    const pokemonName: string = pokemon.getName('fr');
    let isInTeam: boolean = false;
    this.team.forEach((elt: PokemonModel) => {
      if (elt.getName('fr') === pokemonName) isInTeam = true;
    });
    return isInTeam;
  }
  
}
