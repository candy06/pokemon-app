import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
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
  private pokemons: Array<PokemonModel> = [];

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
    const urls: string[] = [];
    this.pokedex.pokemonEntryModels.forEach((pokemonEntry: PokemonEntryModel) => {
      urls.push(pokemonEntry.url);
    });
    this.pokemonService.getPokemonModelsPromise(urls, urls.length).then(() => {
      this.pokemons = this.pokemonService.getPokemonModels();
    });
  }

}
