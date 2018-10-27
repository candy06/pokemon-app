import { Component, OnInit, Input, Inject, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonModel } from 'src/app/_models/pokemon-model';
import { ContextService } from 'src/app/_services/context.service';
import { Device } from 'src/app/_models/device';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { PokemonsTeamService } from 'src/app/_services/pokemons-team.service';
import { UserAction } from 'src/app/_models/user-action';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnChanges {

  @Input() private pokemon: PokemonModel;

  @Output() addPokemonToTeam = new EventEmitter<PokemonModel>();

  private _displayedMoves: string[] = [];
  private isPokemonAdded: boolean = false;
  private _userAction: UserAction;

  constructor(private context: ContextService, private pokemonService: PokemonService, private teamService: PokemonsTeamService) { }

  ngOnInit() {
    this.isPokemonAdded = false;
    if (!this.pokemon) this.pokemon = this.pokemonService.getSelectedPokemon();
    this._displayedMoves = this.pokemon.moves.slice(0, 4);
    this._userAction = UserAction.DisplayPokemonDescription;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isPokemonAdded = false;
    this._userAction = UserAction.DisplayPokemonDescription;
  }

  get displayedMoves(): string[] {
    return this._displayedMoves;
  }

  set displayedMoves(subArrayOfMoves: string[]) {
    this._displayedMoves = subArrayOfMoves;
  }

  private addPokemonInTeam(): void {
    if (this.context.getDeviceUsed() === Device.Tablet) {
      this.addPokemonToTeam.emit(this.pokemon);
    } else {
      this.teamService.addPokemonInTeam(this.pokemon);
    }
    this.isPokemonAdded = true;
  }

  get userAction(): UserAction {
    return this._userAction;
  }

  private updateUserAction(action: string) {
    switch (action) {
      case 'abilities':
        this._userAction = UserAction.DisplayAbilities;
        break;
      case 'moves':
        this._userAction = UserAction.DisplayMoves;
        break;
      case 'stats':
        this._userAction = UserAction.DisplayStats;
        break;
      case 'info':
        this._userAction = UserAction.DisplayHelp;
        break;
      case 'description':
        this._userAction = UserAction.DisplayPokemonDescription;
        break;
      default:
        break;
    }
  }

}
