import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RideDataService } from '../ride-data.service';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-cancel-ride',
  templateUrl: './cancel-ride.component.html',
  styleUrls: ['./cancel-ride.component.css']
})
export class CancelRideComponent implements OnInit {

  constructor(private router: Router, private rideDataService: RideDataService, private rideService: RideService) { }
  bookRideDetails = {};
  message = '';

  ngOnInit() {
    this.rideService.cancelRideResponseChanged
      .subscribe(message => {
          this.message = message;
      });
  }

  showAllRide() {
    this.rideDataService.fetchAllRides();
    this.router.navigate(['show_ride']);
  }

  offerRide() {
    this.router.navigate(['offer_ride']);
  }

}
