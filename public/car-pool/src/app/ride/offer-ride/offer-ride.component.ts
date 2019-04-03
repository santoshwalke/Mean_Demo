import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { RideDataService } from '../ride-data.service';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  offerForm: FormGroup;
  message = '';

  constructor(private location: Location, private rideDataService: RideDataService, private rideService: RideService) { }

  ngOnInit() {

    this.offerForm = new FormGroup({
      txtName: new FormControl('', [Validators.required]),
      txtStart: new FormControl('', [Validators.required]),
      txtDestination: new FormControl('', [Validators.required]),
      txtCar: new FormControl('', [Validators.required]),
      txtSeat:  new FormControl('', [Validators.required, Validators.min(0), Validators.max(8)])
    });
    
    this.rideService.offerRideResponseChanged
    .subscribe(message => {
          this.message = message;
      });
  }

  onSubmit() {
    this.rideDataService.setOfferRides(this.offerForm);
  }

  goBack() {
    this.location.back();
  }

}
