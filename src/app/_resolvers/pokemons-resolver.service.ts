import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PokedexService } from '../_services/pokedex.service';
import { Pokedex } from '../_models/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokemonsResolver implements Resolve<any> {

  constructor(private _pokedexService: PokedexService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
    const id: number = +route.params['id'];
    const pokedexes: Array<Pokedex> = this._pokedexService.getPokedexes();
    if (pokedexes.length == 0) {
      this.router.navigate(['home']);
    } else {
      return this._pokedexService.getSpecificPokedex(id);
    }
  }
}
