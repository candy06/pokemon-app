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

  private isStatColumnDisplayed = true;

  private pokedex: Pokedex;
  private pokemons: Array<Pokemon>;
  private loading: boolean = false;
  private showStats: boolean = false;

  displayedColumns: string[] = ['id', 'pokemon', 'name-fr', 'name-en', 'name-de', 'name-ja', 'types', 'stats'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  removedColumns: string[] = [];

  hasRemovedStats: boolean = false;

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
    console.log(`Resize of the screen, the new width is ${targetSize}!`);
    this.adjustColumnCount(targetSize);
    /*if (targetSize < 1200 && !this.hasRemovedStats) {
      this.isStatColumnDisplayed = false;
      this.hasRemovedStats = true;
      const removedItem = this.columnsToDisplay.pop();
      this.removedColumns.push(removedItem);
    }

    if (targetSize > 1200 && this.columnsToDisplay.length !== this.displayedColumns.length) {
      this.hasRemovedStats = false;
      this.isStatColumnDisplayed = true;
      this.removedColumns.forEach(col => {
        this.columnsToDisplay.push(col);
      });
    }
    /*switch(targetSize) {
      case 1200:
      console.log('coucou');
        this.isStatColumnDisplayed = false;
        const removedItem = this.columnsToDisplay.pop();
        this.removedColumns.push(removedItem);
        break;
      default:
        break;
    }*/
  }

  adjustColumnCount(screenSize: number): void {
    if (screenSize < 1200 && !this.hasRemovedStats) {
      this.isStatColumnDisplayed = false;
      this.hasRemovedStats = true;
      const removedItem = this.columnsToDisplay.pop();
      this.removedColumns.push(removedItem);
    }

    if (screenSize > 1200 && this.columnsToDisplay.length < this.displayedColumns.length) {
      //this.removedColumns = [];
      this.hasRemovedStats = false;
      this.isStatColumnDisplayed = true;
      this.removedColumns.forEach(col => {
        this.columnsToDisplay.push(col);
      });
      this.removedColumns = [];
    }
  }

}
