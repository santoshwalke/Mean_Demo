import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RideDataService } from '../ride-data.service';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {

  constructor(private router: Router, private rideDataService: RideDataService, private rideService: RideService) { }
  bookRideDetails = {};
  
  ngOnInit() {
    this.rideService.getBookRideDetails
    .subscribe(rideDetail => {
        this.bookRideDetails = rideDetail;
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
