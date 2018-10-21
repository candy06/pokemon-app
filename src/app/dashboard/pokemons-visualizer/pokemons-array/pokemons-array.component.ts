import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { PokedexModel } from 'src/app/_models/pokedex-model';
import { ContextService } from 'src/app/_services/context.service';
import { PokemonModel } from 'src/app/_models/pokemon-model';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { PokemonEntryModel } from 'src/app/_models/pokemon-entry-model';
import { UserType } from 'src/app/_models/user-type';
import { Device } from 'src/app/_models/device';

@Component({
  selector: 'app-pokemons-array',
  templateUrl: './pokemons-array.component.html',
  styleUrls: ['./pokemons-array.component.scss']
})
export class PokemonsArrayComponent implements OnInit, OnChanges {

  @Input() private pokedex: PokedexModel;
  @Output() pokemonChanged = new EventEmitter<PokemonModel>();
  
  private pokemons: Array<PokemonModel> = [];
  private loading: boolean = true;

  private displayedColumns: Array<string> = [];

  constructor(private contextService: ContextService, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.updateDisplayedColumnsArray(this.contextService.getUserType(), this.contextService.getDeviceUsed());
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
      if (deviceUsed === 1) this.displayedColumns = ['name', 'types', 'stats', 'abilities', 'moves']; // 'actions' pour plus tard
      else this.displayedColumns = ['image', 'name', 'actions'];
    } else {
      this.displayedColumns = ['image', 'name', 'description', 'types'];
    }
  }

  private loadPokemons(): void {
    this.loading = true;
    const pokemonEntriesModel: Array<PokemonEntryModel> = this.pokedex.pokemonEntryModels;
    this.pokemonService.getPokemonModelsPromise(pokemonEntriesModel).then(() => {
      this.pokemons = this.pokemonService.getPokemonModels(10);
      this.loading = false
    });
  }

  private selectPokemon(pokemon: PokemonModel): void {
    this.pokemonChanged.emit(pokemon);
  }

}
