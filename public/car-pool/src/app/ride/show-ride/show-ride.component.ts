import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ride } from '../ride.model';
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

  constructor(private router: Router, private rideService: RideService) { }

  ngOnInit() {
      this.rideService.rideChanged
      .subscribe((ride: Ride[]) => {
         this.allRides = ride;
         this.saveAllRide = this.allRides;
      });
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
    this.allRides = this.saveAllRide.find((detail: Ride) => {
        return detail.pickup === this.office;
    });
  }

  sortFrom() {
    this.allRides = this.saveAllRide.find((detail: Ride) => {
        return detail.destination === this.office;
    });
  }

  sortOther() {
    this.allRides = this.saveAllRide.find((detail: Ride) => {
        return detail.destination !== this.office && detail.pickup !== this.office;
    });
  }

}
