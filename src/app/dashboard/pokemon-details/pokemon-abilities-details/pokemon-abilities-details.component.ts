import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { PokemonAbilityModel } from 'src/app/_models/pokemon-ability-model';
import { ContextService } from 'src/app/_services/context.service';

@Component({
  selector: 'app-pokemon-abilities-details',
  templateUrl: './pokemon-abilities-details.component.html',
  styleUrls: ['./pokemon-abilities-details.component.scss']
})
export class PokemonAbilitiesDetailsComponent implements OnInit {

  @Input() private abilityUrls: string[] = [];

  private abilityModels: PokemonAbilityModel[] = [];

  constructor(private _pokemonService: PokemonService, private context: ContextService) { }

  ngOnInit() {
    this.abilityModels = this._pokemonService.getPokemonAbilityDetails(this.abilityUrls);
    console.log(this.abilityModels);
  }

}
