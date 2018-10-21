import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokedexModel } from 'src/app/_models/pokedex-model';
import { ContextService } from 'src/app/_services/context.service';
import { PokemonModel } from 'src/app/_models/pokemon-model';

@Component({
  selector: 'app-pokemons-visualizer',
  templateUrl: './pokemons-visualizer.component.html',
  styleUrls: ['./pokemons-visualizer.component.scss']
})
export class PokemonsVisualizerComponent implements OnInit {

  @Output() pokemonSelectedByUser = new EventEmitter<PokemonModel>();

  private selectedPokedex: PokedexModel = null;

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    
  }

  private onPokedexChange(selectedPokedex: PokedexModel): void {
    this.selectedPokedex = selectedPokedex;
    this.contextService.updatePokedexSelected(selectedPokedex);
  }

  private onPokemonChange(selectedPokemon: PokemonModel): void {
    this.pokemonSelectedByUser.emit(selectedPokemon);
  }

}
