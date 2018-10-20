import { Component, OnInit, Input } from '@angular/core';
import { PokedexModel } from 'src/app/_models/pokedex-model';
import { ContextService } from 'src/app/_services/context.service';

@Component({
  selector: 'app-pokemons-visualizer',
  templateUrl: './pokemons-visualizer.component.html',
  styleUrls: ['./pokemons-visualizer.component.scss']
})
export class PokemonsVisualizerComponent implements OnInit {

  private selectedPokedex: PokedexModel = null;

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    
  }

  private onPokedexChange(selectedPokedex: PokedexModel) {
    this.selectedPokedex = selectedPokedex;
    this.contextService.updatePokedexSelected(selectedPokedex);
  }

}
