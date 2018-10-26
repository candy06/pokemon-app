import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { PokemonModel } from 'src/app/_models/pokemon-model';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit, OnChanges {

  @Input() private pokemon: PokemonModel;
  private team: PokemonModel[];
  private cols: number;
  //private rowHeight: number;

  constructor() { }

  ngOnInit() {
    const teamSize: number = 6;
    this.team = new Array<PokemonModel>(teamSize);
    this.cols = this.team.length / 2;
    //this.rowHeight = 75;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.team) return;
    if (changes['pokemon']) {
      const selectedPokemon: SimpleChange = changes.pokemon;
      this.pokemon = selectedPokemon.currentValue;
      for (let i = 0 ; i < this.team.length ; i++) {
        const element: PokemonModel = this.team[i];
        if (!element) {
          this.team[i] = this.pokemon;
          break;
        }
      }
    }
  }

  private removePokemon(pokemon: PokemonModel): void {
    let pokemonToRemoveIndex: number = -1;
    for (let i = 0 ; i < this.team.length ; i++) {
      let pokemonInTeam: PokemonModel = this.team[i];
      if (pokemonInTeam.equals(pokemon)) {
        pokemonToRemoveIndex = i;
        pokemonInTeam = undefined;
        break;
      }
    }
    delete this.team[pokemonToRemoveIndex];
  }

}
