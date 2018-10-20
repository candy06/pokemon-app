import { Component, OnInit } from '@angular/core';
import { UserType } from '../_models/user-type';
import { minDesktopWidth, minTabletWidth } from '../_models/global';
import { Device } from '../_models/device';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private userType: UserType;
  private deviceUsed: Device;

  constructor() { }

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
  }

  private updateDeviceUsed(screenWidth: number): void {
    if (screenWidth >= minDesktopWidth) {
      this.deviceUsed = Device.Desktop;
    } else if (screenWidth >= minTabletWidth && screenWidth < minDesktopWidth) {
      this.deviceUsed = Device.Tablet;
    } else {
      this.deviceUsed = Device.Smartphone;
    }
  }

  private onResize(event) {
    const screenWidth = event.target.innerWidth;
    this.updateUserType(screenWidth);
    this.updateDeviceUsed(screenWidth);
  }

}
