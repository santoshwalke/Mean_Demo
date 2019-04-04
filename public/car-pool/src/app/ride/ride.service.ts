import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ride } from './ride.model';

@Injectable({
  providedIn: 'root'
})
export class RideService {
    rideChanged = new Subject<Ride[]>();
    bookRideChanged = new Subject<{id: number, rideData: object, message: string}>();
    offerRideResponseChanged = new Subject<string>();
    cancelRideResponseChanged = new Subject<string>();

  constructor() { }

  getRide(rides: Ride[]) {
      this.rideChanged.next(rides.slice());
  }

  getBookRideDetails(rides: {id: number, rideData: object, message: string}) {
    this.bookRideChanged.next(rides);
  }

  offerRideResponse(data: {message: string}) {
    this.offerRideResponseChanged.next(data.message);
  }

  getCancelRideRes(data: {message: string}) {
    this.cancelRideResponseChanged.next(data.message);
  }
}
