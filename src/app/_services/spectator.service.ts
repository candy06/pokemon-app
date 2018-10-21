import { Injectable } from '@angular/core';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class SpectatorService {

  private daysPerWeek: number = 7;

  constructor() { }

  /**
   * Return an array with the number of spectator per days
   */
  getSpectators(): number[] {
    const spectators: number[] = [];
    for (let i = 0; i < this.daysPerWeek; i++) {
      spectators.push(Math.floor(Math.random() * 5000) + 1000);
    }
    return spectators;
  }

}
