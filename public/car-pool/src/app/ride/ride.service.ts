import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ride } from './ride.model';

@Injectable({
  providedIn: 'root'
})
export class RideService {
    rideChanged = new Subject<Ride[]>();

  constructor() { }

  getRide(rides: Ride[]) {
      this.rideChanged.next(rides.slice());
  }
}
