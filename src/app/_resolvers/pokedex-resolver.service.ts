import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PokedexService } from '../_services/pokedex.service';
import { Pokedex } from '../_models/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexResolver implements Resolve<any> {

  constructor(private _pokedexService: PokedexService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const pokedexes: Array<Pokedex> = this._pokedexService.getPokedexes();
    if (pokedexes.length == 0) {
      return this._pokedexService.fetchPokedexesAPI();
    } else {
      return pokedexes;
    }
  }

}
