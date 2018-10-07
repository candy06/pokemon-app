import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokedex } from '../_models/pokedex';
import { PokedexService } from '../_services/pokedex.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  private pokedex: Pokedex;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pokedex = this.route.snapshot.data.pokedex;
  }

}
