import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './_routing/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ApplicationHeaderComponent } from './application-header/application-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
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
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { PokemonAbilitiesDetailsComponent } from './dashboard/pokemon-details/pokemon-abilities-details/pokemon-abilities-details.component';
import { PokemonStatsDetailsComponent } from './dashboard/pokemon-details/pokemon-stats-details/pokemon-stats-details.component';
import { PokemonMovesDetailsComponent } from './dashboard/pokemon-details/pokemon-moves-details/pokemon-moves-details.component';

@NgModule({
  declarations: [ 
    AppComponent,
    ApplicationHeaderComponent,
    CapitalizeFirstPipe,
    DescriptionPipe,
    DashboardComponent,
    PokemonsVisualizerComponent,
    PokedexSelectorComponent,
    PokemonsArrayComponent,
    PokemonsTournamentStatsComponent,
    TournamentVisitorsChartComponent,
    PokemonDetailsComponent,
    PokemonTeamComponent,
    PokemonAbilitiesDetailsComponent,
    PokemonStatsDetailsComponent,
    PokemonMovesDetailsComponent
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
    PokemonDetailsComponent
  ],
  providers: [PokedexService, PokemonService, CommonService, ContextService, SpectatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
