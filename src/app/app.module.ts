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
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { SpiderChartComponent } from './spider-chart/spider-chart.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsVisualizerComponent } from './dashboard/pokemons-visualizer/pokemons-visualizer.component';
import { PokedexSelectorComponent } from './dashboard/pokemons-visualizer/pokedex-selector/pokedex-selector.component'; 
import {MatSelectModule} from '@angular/material/select';  
import { PokemonsArrayComponent } from './dashboard/pokemons-visualizer/pokemons-array/pokemons-array.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PokemonService } from './_services/pokemon.service';
import { CommonService } from './_services/common.service';
import { ContextService } from './_services/context.service';
import { PokemonsTournamentStatsComponent } from './dashboard/pokemons-tournament-stats/pokemons-tournament-stats.component';
import { SpectatorService } from './_services/spectator.service';
import { TournamentVisitorsChartComponent } from './dashboard/tournament-visitors-chart/tournament-visitors-chart.component';
import { PokemonDetailsComponent } from './dashboard/pokemon-details/pokemon-details.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { PokemonTeamComponent } from './dashboard/pokemon-team/pokemon-team.component';
import {MatDividerModule} from '@angular/material/divider';
 
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
    DashboardComponent,
    PokemonsVisualizerComponent,
    PokedexSelectorComponent,
    PokemonsArrayComponent,
    PokemonsTournamentStatsComponent,
    TournamentVisitorsChartComponent,
    PokemonDetailsComponent,
    PokemonTeamComponent
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
    MatPaginatorModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatDividerModule
  ],
  entryComponents: [
    SpiderChartComponent
  ],
  providers: [PokedexService, PokemonService, CommonService, ContextService, SpectatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
