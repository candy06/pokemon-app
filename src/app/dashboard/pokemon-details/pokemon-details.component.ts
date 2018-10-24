import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from 'src/app/_models/pokemon-model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() private pokemon: PokemonModel;

  constructor() { }

  ngOnInit() {
  }

}
