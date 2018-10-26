import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { PokemonModel } from 'src/app/_models/pokemon-model';
import { Chart } from 'chart.js';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-pokemons-tournament-stats',
  templateUrl: './pokemons-tournament-stats.component.html',
  styleUrls: ['./pokemons-tournament-stats.component.scss']
})
export class PokemonsTournamentStatsComponent implements OnInit, OnChanges {

  @Input() private pokemonModel: PokemonModel;

  private pokemonUseChart;
  private chartLabels: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  private pokemonsDisplayed: string[] = [];
  private pokemonSelected: string;

  constructor(private _common: CommonService) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['pokemonModel']) {

      const modifiedPokemon: SimpleChange = changes.pokemonModel;
      this.pokemonModel = modifiedPokemon.currentValue;

      // Check if the chart is defined, if not, generate it
      if (!this.pokemonUseChart) {
        this.pokemonsDisplayed.push(this.pokemonModel.getName('fr'));
        this.generatePokemonUseChart();
      } else {
        // Check if we can add the pokemon or if it is already in the graph
        let canAdd = (this.pokemonsDisplayed.includes(this.pokemonModel.getName('fr'))) ? false : true;
        if (canAdd) {
          this.pokemonsDisplayed.push(this.pokemonModel.getName('fr'));
          this.addDataset();
        }
      }
    } else {
      this.pokemonModel = null;
    }

  }

  private clearGraph(): void {
    this.pokemonSelected = undefined;
    this.pokemonsDisplayed.length = 0;
    this.pokemonUseChart.data.datasets.length = 0;
    this.pokemonUseChart.update();
  }

  private remove(pokemonSelected: string): void {
    let indexOfPokemonSelected: number = -1;
    for (let i = 0 ; i < this.pokemonsDisplayed.length ; i++) {
      if (this.pokemonsDisplayed[i] === pokemonSelected) {
        indexOfPokemonSelected = i;
        this.pokemonSelected = undefined;
        break;
      }
    }
    if (indexOfPokemonSelected >= 0) {
      this.pokemonUseChart.data.datasets.splice(indexOfPokemonSelected, 1);
      this.pokemonsDisplayed.splice(indexOfPokemonSelected, 1);
    }
    this.pokemonUseChart.update();
  }

  private addDataset(): void {
    const label = this.pokemonModel.getName('fr');
    const data = this.pokemonModel.tournamentStats;
    const borderColor = this._common.randomColor(100);
    const fill = false;
    this.pokemonUseChart.data.datasets.push({ label, data, borderColor, fill });
    this.pokemonUseChart.update();
  }

  private generatePokemonUseChart(): void {
    this.pokemonUseChart = new Chart('pokemonUseChartCanvas', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            label: this.pokemonModel.getName('fr'),
            data: this.pokemonModel.tournamentStats,
            borderColor: this._common.randomColor(150),
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Pourcentage d'utilisation des pokemons lors du tournois"
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
