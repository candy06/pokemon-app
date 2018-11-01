import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { PokemonMoveModel } from 'src/app/_models/pokemon-move-model';
import { ContextService } from 'src/app/_services/context.service';

@Component({
  selector: 'app-pokemon-moves-details',
  templateUrl: './pokemon-moves-details.component.html',
  styleUrls: ['./pokemon-moves-details.component.scss']
})
export class PokemonMovesDetailsComponent implements OnInit {

  @Input() private moveUrls: string[] = [];

  private moves: PokemonMoveModel[] = [];

  private index: number;

  constructor(private _pokemonService: PokemonService, private context: ContextService) { }

  ngOnInit() {
    this.index = 0;
    this.moves = this._pokemonService.getPokemonMoveDetails(this.moveUrls);
  }

  private next(): void {
    const incrIndex = this.index + 1;
    this.index = (incrIndex > this.moves.length - 1) ? 0 : incrIndex;
  }

  private prev(): void {
    const decrIndex = this.index - 1;
    this.index = (decrIndex < 0) ? this.moves.length - 1 : decrIndex;
  }

  private onSwipeLeft(): void {
    this.prev();
  }

  private onSwipeRight(): void {
    this.next();
  }

}
