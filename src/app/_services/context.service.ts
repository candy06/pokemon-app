import { Injectable } from '@angular/core';
import { UserType } from '../_models/user-type';
import { Device } from '../_models/device';
import { PokedexModel } from '../_models/pokedex-model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private userType: UserType;
  private deviceUsed: Device;
  private selectedPokedex: PokedexModel;

  constructor() { }

  updateUserType(userType: UserType): void {
    this.userType = userType;
  }

  updateDeviceUsed(deviceUsed: Device): void {
    this.deviceUsed = deviceUsed;
  }

  updatePokedexSelected(selectedPokedex: PokedexModel): void {
    this.selectedPokedex = selectedPokedex;
  }

  getUserType(): UserType {
    return this.userType;
  }

  getDeviceUsed(): Device {
    return this.deviceUsed;
  }

  getSelectedPokedex(): PokedexModel {
    return this.selectedPokedex;
  }

}
