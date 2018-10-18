import { Component, OnInit, ViewChild, Input, Inject, HostListener } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { PokemonStatistic } from '../_models/pokemon-statistic';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-spider-chart',
  templateUrl: './spider-chart.component.html',
  styleUrls: ['./spider-chart.component.scss']
})
export class SpiderChartComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<SpiderChartComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

    private statistics: Array<PokemonStatistic>;
    private pokemonName: string;
    private chartTitle: string;
    
    ngOnInit(): void {
        this.statistics = this.data.stats;
        this.pokemonName = this.data.name;
        this.chartTitle = `${this.pokemonName}'s base statistics`;
    }

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 5 };

    xAxis: any =
    {
        dataField: 'name',
        displayText: 'Statistic',
        valuesOnTicks: true,
        labels: { autoRotate: false }
    };
    valueAxis: any =
    {
        unitInterval: 75,
        minValue: 0,
        maxValue: 300,
        labels: {
            formatSettings: { decimalPlaces: 0 }
        }
    };
    seriesGroups: any =
    [
        {
            spider: true,
            startAngle: 0,
            endAngle: 360,
            radius: 120,
            type: 'splinearea',
            series: [
                { dataField: 'base_stats', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' }
            ]
        }
    ];
    //colorsSchemesList: string[] = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];
  
}