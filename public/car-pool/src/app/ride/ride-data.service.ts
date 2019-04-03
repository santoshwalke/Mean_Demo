import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { RideService } from './ride.service';
import { Ride } from './ride.model';
import { AuthService } from '../auth/auth-service';

@Injectable({
  providedIn: 'root'
})
export class RideDataService {

  constructor(private httpClient: HttpClient, private rideService: RideService, private authService: AuthService) { }

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
        this.rideService.offerRideResponse(data);
    });
  }
  cancelRide(rideId) {
    this.httpClient.post(`${this.baseUrl}/cancel_ride`, {
        rideId : rideId
      })
      .subscribe((data: {message: string}) => {
         this.rideService.cancelRideResponse(data);
      });
    }
  }

  bookRide(rideDetails) {
    this.httpClient.post(`${this.baseUrl}/book_ride`, {
      id : rideDetails.id,
      name: rideDetails.name,
      username: this.authService.getUserName(),
      pickUp: rideDetails.pickUp,
      destination: rideDetails.destination      
    })
    .subscribe((data: {id: number, rideData: object, message: string}) => {
        this.rideService.getBookRideDetails(data);
    });
  }
}
