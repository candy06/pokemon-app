import { Component, OnInit, Input } from '@angular/core';
import { Pokedex } from '../_models/pokedex';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  @Input() private pokedex: Pokedex;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectPokedex() {
    this.router.navigate(['pokemons/' + this.pokedex.id]);
  }

}
