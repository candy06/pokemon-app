import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokedex } from '../_models/pokedex';
import { PokemonService } from '../_services/pokemon.service';
import { Pokemon } from '../_models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  private pokedex: Pokedex;
  private pokemons: Array<Pokemon>;
  private loading: boolean = false;

  displayedColumns: string[] = ['id', 'pokemon', 'name-fr', 'name-en', 'name-de', 'name-ja'];

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.loading = true;
    this.pokedex = this.route.snapshot.data.pokedex;
    this._pokemonService.fetchPokemons(this.pokedex.speciesUrls, this.pokedex.speciesUrls.length).then(() => {
      this.loading = false;
      this.pokemons = this._pokemonService.getPokemons();
      console.log(this.pokemons);
    });
  }

}
