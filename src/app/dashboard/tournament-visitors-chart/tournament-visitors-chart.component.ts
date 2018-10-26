import { Component, OnInit } from '@angular/core';
import { SpectatorService } from 'src/app/_services/spectator.service';
import { Chart } from 'chart.js';
import { CommonService } from 'src/app/_services/common.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tournament-visitors-chart',
  templateUrl: './tournament-visitors-chart.component.html',
  styleUrls: ['./tournament-visitors-chart.component.scss']
})
export class TournamentVisitorsChartComponent implements OnInit {

  private spectatorChart;
  private dataset: number[] = [];
  private colors: string[] = [];
  private chartLabels: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor(private _common: CommonService, private _spectatorService: SpectatorService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataset = this._spectatorService.getSpectators();
    for (let i = 0 ; i < 7 ; i++) {
      this.colors.push(this._common.randomColor(200));
    }
    this.generateSpectatorGraph();
  }

  private generateSpectatorGraph(): void {
    this.spectatorChart = new Chart('spectatorChart', {
      type: 'pie',
      data: {
        datasets: [{
          data: this.dataset,
          backgroundColor: this.colors,
          label: 'Dataset 1'
        }],
        labels: this.chartLabels
      },
      options: {
        responsive: true,
        title: {
          display: true,
          position: 'top',
          fontSize: 18,
          fontFamily: 'Comic sans MS',
          text: "Nombre de visiteurs par jour pendant le tournois"
        },
        legend: {
          display: true,
          position: 'right'
        }
      }
    });
  }

}
