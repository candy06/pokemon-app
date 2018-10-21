import { Component, OnInit } from '@angular/core';
import { UserType } from '../_models/user-type';
import { minDesktopWidth, minTabletWidth } from '../_models/global';
import { Device } from '../_models/device';
import { ContextService } from '../_services/context.service';
import { PokemonModel } from '../_models/pokemon-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private userType: UserType;
  private deviceUsed: Device;
  private selectedPokemon: PokemonModel;

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    const screenWidth: number = window.innerWidth;
    this.updateUserType(screenWidth);
    this.updateDeviceUsed(screenWidth);
  }

  private updateUserType(screenWidth: number): void {
    if (screenWidth > minDesktopWidth) {
      this.userType = UserType.Organizer;
    } else {
      this.userType = UserType.Player;
    }
    this.contextService.updateUserType(this.userType);
  }

  private updateDeviceUsed(screenWidth: number): void {
    if (screenWidth >= minDesktopWidth) {
      this.deviceUsed = Device.Desktop;
    } else if (screenWidth >= minTabletWidth && screenWidth < minDesktopWidth) {
      this.deviceUsed = Device.Tablet;
    } else {
      this.deviceUsed = Device.Smartphone;
    }
    this.contextService.updateDeviceUsed(this.deviceUsed);
  }

  private onResize(event) {
    const screenWidth = event.target.innerWidth;
    this.updateUserType(screenWidth);
    this.updateDeviceUsed(screenWidth);
  }

  private updateSelectedPokemon(pokemon: PokemonModel): void {
    this.selectedPokemon = pokemon;
  }

}
