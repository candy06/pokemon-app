import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from 'src/app/_models/pokemon-model';
import { ContextService } from 'src/app/_services/context.service';
import { Device } from 'src/app/_models/device';
import { MatDialog } from '@angular/material';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss']
})
export class PokemonTeamComponent implements OnInit, OnChanges {

  @Input() private pokemon: PokemonModel;
  @Output() onSelectedPokemon = new EventEmitter<PokemonModel>();
  private team: PokemonModel[];
  private cols: number;

  constructor(private _context: ContextService, private dialog: MatDialog) { }

  ngOnInit() {
    const teamSize: number = 6;
    this.team = new Array<PokemonModel>(teamSize);
    this.cols = this.team.length / 2;
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

  private pokemonSelected(pokemon: PokemonModel): void {
    if (this._context.getDeviceUsed() === Device.Tablet) {
      this.onSelectedPokemon.emit(pokemon);
    }
  }

  private removePokemon(pokemon: PokemonModel): void {
    let pokemonToRemoveIndex: number = -1;
    for (let i = 0 ; i < this.team.length ; i++) {
      let pokemonInTeam: PokemonModel = this.team[i];
      if (!pokemonInTeam) continue;
      if (pokemonInTeam.equals(pokemon)) {
        pokemonToRemoveIndex = i;
        pokemonInTeam = undefined;
        break;
      }
    }
    delete this.team[pokemonToRemoveIndex];
  }

}
