import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { PokemonModel } from 'src/app/_models/pokemon-model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pokemons-tournament-stats',
  templateUrl: './pokemons-tournament-stats.component.html',
  styleUrls: ['./pokemons-tournament-stats.component.scss']
})
export class PokemonsTournamentStatsComponent implements OnInit, OnChanges {

  @Input() private pokemonModel: PokemonModel;

  private chart;
  private chartLabels: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  private pokemonsDisplayed: string[] = [];

  constructor() { }

  ngOnInit() {
    //this.generateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['pokemonModel']) {

      const modifiedPokemon: SimpleChange = changes.pokemonModel;
      this.pokemonModel = modifiedPokemon.currentValue;

      // Check if the chart is defined, if not, generate it
      if (!this.chart) {
        this.pokemonsDisplayed.push(this.pokemonModel.getName('fr'));
        this.generateChart();
      } else {
        // Check if we can add the pokemon or if it is already in the graph
        let canAdd = (this.pokemonsDisplayed.includes(this.pokemonModel.getName('fr'))) ? false : true;
        if (canAdd) {
          this.pokemonsDisplayed.push(this.pokemonModel.getName('fr'));
          this.addDataset();
        }
      }
    }

  }

  private addDataset(): void {
    const label = this.pokemonModel.getName('fr');
    const data = this.pokemonModel.tournamentStats;
    const borderColor = this.randomColor(100);
    const fill = false;
    this.chart.data.datasets.push({ label, data, borderColor, fill });
    this.chart.update();
  }

  private generateChart(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            label: this.pokemonModel.getName('fr'),
            data: this.pokemonModel.tournamentStats,
            borderColor: this.randomColor(150),
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

  private randomColor(brightness) {
    function randomChannel(brightness) {
      var r = 255 - brightness;
      var n = 0 | ((Math.random() * r) + brightness);
      var s = n.toString(16);
      return (s.length == 1) ? '0' + s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  }

}
