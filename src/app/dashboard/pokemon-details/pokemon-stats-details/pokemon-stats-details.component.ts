import { Component, OnInit, Input } from '@angular/core';
import { PokemonStatModel } from 'src/app/_models/pokemon-stat-model';
import { Chart } from 'chart.js';
import { CommonService } from 'src/app/_services/common.service';
import { ContextService } from 'src/app/_services/context.service';
import { Device } from 'src/app/_models/device';

@Component({
  selector: 'app-pokemon-stats-details',
  templateUrl: './pokemon-stats-details.component.html',
  styleUrls: ['./pokemon-stats-details.component.scss']
})
export class PokemonStatsDetailsComponent implements OnInit {

  @Input() private stats: PokemonStatModel[];
  @Input() private name: string;

  private chartLabels: string[] = [];
  private chartData: number[] = [];
  private customClass: string;

  private chart;

  constructor(private common: CommonService, private context: ContextService) { }

  ngOnInit() {
    this.stats.forEach((stat: PokemonStatModel) => {
      this.chartLabels.push(stat.name);
      this.chartData.push(stat.base);
    });
    if (this.context.getDeviceUsed() === Device.Tablet) this.generateRadarGraph();
  }

  private generateRadarGraph(): void {
    this.chart = new Chart('canvas', {
      type: 'radar',
      data: {
        labels: this.chartLabels,
        datasets: [{
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderColor: 'rgba(255, 0, 0, 0.8)',
          pointBackgroundColor: this.common.randomColor(220),
          data: this.chartData
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: false,
          text: 'Statistiques de base'
        },
        scale: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
