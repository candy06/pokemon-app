import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokedexModel } from 'src/app/_models/pokedex-model';
import { PokedexService } from 'src/app/_services/pokedex.service';
import { Device } from 'src/app/_models/device';
import { ContextService } from 'src/app/_services/context.service';

@Component({
  selector: 'app-pokedex-selector',
  templateUrl: './pokedex-selector.component.html',
  styleUrls: ['./pokedex-selector.component.scss']
})
export class PokedexSelectorComponent implements OnInit {

  private pokedexModels: PokedexModel[] = [];
  private selectedPokedex: PokedexModel;
  private deviceUsed: Device;

  @Output() pokedexChanged = new EventEmitter<PokedexModel>();

  constructor(private pokedexService: PokedexService, private contextService: ContextService) { }

  ngOnInit() {
    this.pokedexModels = this.pokedexService.fetchPokedexModels();
    this.deviceUsed = this.contextService.getDeviceUsed();
  }

  private updateParentComponent(): void {
    this.pokedexChanged.emit(this.selectedPokedex);
  }

}
