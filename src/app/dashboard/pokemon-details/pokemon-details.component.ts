import { Component, OnInit, Input, Inject } from '@angular/core';
import { PokemonModel } from 'src/app/_models/pokemon-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContextService } from 'src/app/_services/context.service';
import { Device } from 'src/app/_models/device';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() private pokemon: PokemonModel;
  private _displayedMoves: string [] = [];
  private nextLabel: string = '';
  private prevLabel: string = '';
  private attaquesLabel: string = '';
  private abilitiesLabel: string = '';
  private statsLabel: string = '';

  constructor(private context: ContextService, private pokemonService: PokemonService) { }

  ngOnInit() {
    if (!this.pokemon) this.pokemon = this.pokemonService.getSelectedPokemon();
    //if (this.data.pkmn) this.pokemon = this.data.pkmn;
    if (this.context.getDeviceUsed() === Device.Smartphone) {
      this.nextLabel = 'Suiv.';
      this.prevLabel = 'Prec.';
      this.attaquesLabel = `Attaques`;
      this.abilitiesLabel = `Capacites`;
      this.statsLabel = `Statistiques`
    } else {
      this.nextLabel = 'Attaques suivantes';
      this.prevLabel = 'Attaques precedentes';
      this.attaquesLabel = `Attaques de ${this.pokemon.getName('fr')}`;
      this.abilitiesLabel = `Capacites de ${this.pokemon.getName('fr')}`;
      this.statsLabel = `Statistiques de ${this.pokemon.getName('fr')}`;
    }
    this._displayedMoves = this.pokemon.moves.slice(0, 4);
  }

  get displayedMoves(): string[] {
    return this._displayedMoves;
  } 

  set displayedMoves(subArrayOfMoves: string[]) {
    this._displayedMoves = subArrayOfMoves;
  }

}
