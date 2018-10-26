import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter, ViewChild } from '@angular/core';
import { PokedexModel } from 'src/app/_models/pokedex-model';
import { ContextService } from 'src/app/_services/context.service';
import { PokemonModel } from 'src/app/_models/pokemon-model';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { PokemonEntryModel } from 'src/app/_models/pokemon-entry-model';
import { UserType } from 'src/app/_models/user-type';
import { Device } from 'src/app/_models/device';
import { MatPaginator, MatDialog } from '@angular/material';
import { PokemonDetailsComponent } from '../../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-pokemons-array',
  templateUrl: './pokemons-array.component.html',
  styleUrls: ['./pokemons-array.component.scss']
})
export class PokemonsArrayComponent implements OnInit, OnChanges {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() private pokedex: PokedexModel;
  @Output() pokemonChanged = new EventEmitter<PokemonModel>();
  @Output() addPokemonToTeam = new EventEmitter<PokemonModel>();

  private pokemons: Array<PokemonModel> = [];
  private loading: boolean = true;
  private hasRemovedTypes: boolean = false;
  private hasRemovedName: boolean = false;
  private removedColumns: string[] = [];

  private displayedColumns: Array<string> = [];
  private columnsToDisplay: Array<string> = [];

  constructor(private contextService: ContextService, private pokemonService: PokemonService, private dialog: MatDialog) { }

  ngOnInit() {
    this.updateDisplayedColumnsArray(this.contextService.getUserType(), this.contextService.getDeviceUsed());
    const screenWidthInit = window.innerWidth;
    this.updateColumnsCount(screenWidthInit);
  }

  /**
   * When change detected we update this.pokedex
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokedex']) {
      const modifiedPokedex: SimpleChange = changes.pokedex;
      this.pokedex = modifiedPokedex.currentValue;
    }
    this.loadPokemons();
  }

  private updateDisplayedColumnsArray(userType: UserType, deviceUsed: Device): void {
    if (userType === 0) {
      if (deviceUsed === 1) this.displayedColumns = ['name', 'types', 'stats', 'abilities', 'moves'];
      else this.displayedColumns = ['image', 'name'];
    } else {
      this.displayedColumns = ['image', 'name', 'description', 'types'];
    }
    this.columnsToDisplay = this.displayedColumns.slice();
  }

  private loadPokemons(): void {
    this.loading = true;
    const pokemonEntriesModel: Array<PokemonEntryModel> = this.pokedex.pokemonEntryModels;
    this.pokemonService.getPokemonModelsPromise(pokemonEntriesModel).then(() => {
      this.pokemons = this.pokemonService.getPokemonModels(25);
      this.loading = false
    });
  }

  onResize(event) {
    const targetSize = event.target.innerWidth;
    this.updateColumnsCount(targetSize);
  }

  private updateColumnsCount(screenSize: number): void {
    // On adapte seulement pour desktop pour le moment
    if (this.contextService.getDeviceUsed() === Device.Desktop) {
      if (screenSize < 1600 && !this.hasRemovedTypes) this.removeColumn('types');
      if (screenSize >= 1600 && this.columnsToDisplay.length < this.displayedColumns.length) this.addColumn('types');
      if (screenSize < 1250 && !this.hasRemovedName) this.removeColumn('name');
      if (screenSize >= 1250 && this.columnsToDisplay.length < this.displayedColumns.length - 1) this.addColumn('name');
    }
  }

  private selectPokemon(pokemon: PokemonModel): void {
    this.pokemonService.selectPokemonModel(pokemon);
    if (this.contextService.getDeviceUsed() === Device.Smartphone) {
      const dialogRef = this.dialog.open(PokemonDetailsComponent, {
        width: 'auto',
        //data: {pkmn: pokemon}
      });
    } else {
      this.pokemonChanged.emit(pokemon);
    }
  }

  private addToTeam(pokemon: PokemonModel): void {
    this.addPokemonToTeam.emit(pokemon);
  }

  private addColumn(name: string): void {
    let index: number;
    switch (name) {
      case 'types':
        this.hasRemovedTypes = false;
        index = this.displayedColumns.indexOf('types');
        break;
      case 'name':
        this.hasRemovedName = false;
        index = this.displayedColumns.indexOf('name');
        break;
      default:
        break;
    }
    const addedColumn = this.removedColumns.pop();
    this.columnsToDisplay.splice(index, 0, addedColumn);
  }

  private removeColumn(name: string): void {
    let index: number;
    switch (name) {
      case 'types':
        this.hasRemovedTypes = true;
        index = this.columnsToDisplay.indexOf('types');
        break;
      case 'name':
        this.hasRemovedName = true;
        index = this.columnsToDisplay.indexOf('name');
        break;
      default:
        break;
    }
    const removedColumn: string[] = this.columnsToDisplay.splice(index, 1);
    this.removedColumns.push(removedColumn[0]);
  }

}
