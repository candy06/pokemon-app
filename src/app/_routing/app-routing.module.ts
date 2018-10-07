import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { PokemonsResolver } from '../_resolvers/pokemons-resolver.service';
import { PokedexResolver } from '../_resolvers/pokedex-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: {
      pokedexes: PokedexResolver
    }
  },
  {
    path: 'pokemons/:id',
    component: PokemonsComponent,
    pathMatch: 'full',
    resolve: {
      pokedex: PokemonsResolver
    }
  }
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
