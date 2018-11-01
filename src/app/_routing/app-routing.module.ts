import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { PokemonsResolver } from '../_resolvers/pokemons-resolver.service';
import { PokedexResolver } from '../_resolvers/pokedex-resolver.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ], providers: [
    PokemonsResolver,
    PokedexResolver
  ],
  declarations: []
})
export class AppRoutingModule { }
