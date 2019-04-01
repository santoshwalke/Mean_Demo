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
    this.httpClient.get(`${this.baseUrl}/api/show_rides`, {})
    .subscribe((data: Ride[]) => {
        this.rideService.getRide(data);
    });
  }
}
