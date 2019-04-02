import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { RideService } from './ride.service';
import { Ride } from './ride.model';

@Injectable({
  providedIn: 'root'
})
export class RideDataService {

  constructor(private httpClient: HttpClient, private rideService: RideService) { }

    baseUrl = environment.baseUrl;

  fetchAllRides() {
    this.httpClient.get(`${this.baseUrl}/show_rides`, {})
    .subscribe((data: Ride[]) => {
        this.rideService.getRide(data);
    });
  }

  setOfferRides(request) {
    console.log(request);
    this.httpClient.post(`${this.baseUrl}/offer_ride`, {
      id: Math.floor(Math.random() * Math.floor(100)),
      name: request.value.txtName,
      car: request.value.txtCar,
      seatsLeft: request.value.txtSeat,
      pickUp: request.value.txtStart,
      destination: request.value.txtDestination
    })
    .subscribe((data: {message: string}) => {
        console.log(data);
    });
  }
}
