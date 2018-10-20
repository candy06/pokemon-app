import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokedex } from '../_models/pokedex';
import { PokemonService } from '../_services/pokemon.service';
import { Pokemon } from '../_models/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { SpiderChartComponent } from '../spider-chart/spider-chart.component';
import { PokemonStatistic } from '../_models/pokemon-statistic';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  private hasRemovedStats: boolean = false;
  private hasRemovedTypes: boolean = false;

  private pokedex: Pokedex;
  private pokemons: Array<Pokemon>;
  private loading: boolean = false;
  private showStats: boolean = false;

  displayedColumns: string[] = ['id', 'pokemon', 'name-fr', 'name-en', 'name-de', 'name-ja', 'types', 'stats'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  removedColumns: string[] = [];

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService, private dialog: MatDialog, private observableMedia: ObservableMedia) { }

  ngOnInit() {
    this.loading = true;
    this.pokedex = this.route.snapshot.data.pokedex;
    this._pokemonService.fetchPokemons(this.pokedex.speciesUrls, this.pokedex.speciesUrls.length).then(() => {
      this.loading = false;
      this.pokemons = this._pokemonService.getPokemons();
    });
    const screenWidthInit = window.innerWidth;
    this.adjustColumnCount(screenWidthInit);
  }

  openDialog(pokemonStats: Array<PokemonStatistic>, pokemonName: string): void {
    const dialogRef = this.dialog.open(SpiderChartComponent, {
      data: { stats: pokemonStats, name: pokemonName }
    });
  }

  onResize(event) {
    const targetSize = event.target.innerWidth;
    this.adjustColumnCount(targetSize);
  }

  adjustColumnCount(screenSize: number): void {

    if (screenSize < 975 && !this.hasRemovedTypes) this.removeColumn('types');
    if (screenSize > 975 && this.columnsToDisplay.length < this.displayedColumns.length - 1) this.addColumn('types');

    if (screenSize < 1200 && !this.hasRemovedStats) this.removeColumn('stats');
    if (screenSize > 1200 && this.columnsToDisplay.length < this.displayedColumns.length) this.addColumn('stats');

  }

  private addColumn(name: string): void {
    switch (name) {
      case 'stats':
        this.hasRemovedStats = false;
        break;
      case 'types':
        this.hasRemovedTypes = false;
        break;
      default:
        break;
    }
    const addedColumn = this.removedColumns.pop();
    this.columnsToDisplay.push(addedColumn);
  }

  private removeColumn(name: string): void {
    switch(name) {
      case 'stats':
        this.hasRemovedStats = true;
        break;
      case 'types':
        this.hasRemovedTypes = true;
        break;
      default:
        break;
    }
    const removedColumn = this.columnsToDisplay.pop();
    this.removedColumns.push(removedColumn);
  }

}
