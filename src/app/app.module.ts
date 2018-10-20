import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './_routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexService } from './_services/pokedex.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { CapitalizeFirstPipe } from './_pipes/capitalize-first.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DescriptionPipe } from './_pipes/description.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PokemonsComponent } from './pokemons/pokemons.component';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { SpiderChartComponent } from './spider-chart/spider-chart.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component'; 

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    ApplicationHeaderComponent,
    PokedexComponent,
    CapitalizeFirstPipe,
    DescriptionPipe,
    PokemonsComponent,
    jqxChartComponent,
    SpiderChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatPaginatorModule
  ],
  entryComponents: [
    SpiderChartComponent
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
