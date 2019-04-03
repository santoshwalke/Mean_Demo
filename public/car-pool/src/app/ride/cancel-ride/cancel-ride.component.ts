import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RideDataService } from '../ride-data.service';

@Component({
  selector: 'app-cancel-ride',
  templateUrl: './cancel-ride.component.html',
  styleUrls: ['./cancel-ride.component.css']
})
export class CancelRideComponent implements OnInit {

  constructor(private router: Router, private rideDataService: RideDataService) { }
  bookRideDetails = {};
  
  ngOnInit() {
  }

  showAllRide() {
    this.rideDataService.fetchAllRides();
    this.router.navigate(['show_ride']);
  }

  offerRide() {
    this.router.navigate(['offer_ride']);
  }

}
