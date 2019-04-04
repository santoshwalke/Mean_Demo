import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ride } from '../ride.model';

import { RideDataService } from '../ride-data.service';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-show-ride',
  templateUrl: './show-ride.component.html',
  styleUrls: ['./show-ride.component.css']
})
export class ShowRideComponent implements OnInit {

    allRides: Ride[] = [];
    saveAllRide: Ride[] = [];
    rideDetail: Ride;
    office = 'Infosys';

  constructor(private router: Router, private rideService: RideService, private rideDataService: RideDataService) { }

  ngOnInit() {
      this.rideService.rideChanged
      .subscribe((ride: Ride[]) => {
         this.allRides = ride;
         this.saveAllRide = this.allRides;
      });
  }
  bookRide(RideDetails: object) {
    this.rideDataService.bookRide(RideDetails);
    this.router.navigate(['book_ride']);
  }
  offerRide() {
    this.router.navigate(['offer_ride']);
  }
  getRideDetails(id: string) {
    this.rideDetail = this.allRides.find((detail: Ride) => {
        return detail._id === id;
    });
  }

  redirectToBR() {
      this.router.navigate(['book_ride']);
  }

  sortTo() {
    this.allRides = this.saveAllRide.filter((detail: Ride) => {
        return detail.destination === this.office;
    });
  }

  sortFrom() {
    this.allRides = this.saveAllRide.filter((detail: Ride) => {
        return detail.pickUp === this.office;
    });
  }

  sortOther() {
    this.allRides = this.saveAllRide.filter((detail: Ride) => {
        return detail.destination !== this.office && detail.pickUp !== this.office;
    });
  }

}
