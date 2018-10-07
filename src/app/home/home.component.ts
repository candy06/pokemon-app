import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../_services/pokedex.service';
import { Pokedex } from '../_models/pokedex';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private pokedexes: Array<Pokedex> = [];

  private cols: number;

  constructor(private _pokedexService: PokedexService, private observableMedia: ObservableMedia, private route: ActivatedRoute) { }

  ngOnInit() {
    const breakpoints : { [ size : string ] : number } =
    {
      ["xs"] : 1,
      ["sm"] : 1,
      ["md"] : 2,
      ["lg"] : 2,
      ["xl"] : 3
    };
    this.observableMedia.subscribe(x => this.cols = breakpoints[x.mqAlias]);
    this.pokedexes = this.route.snapshot.data.pokedexes;
  }

}
