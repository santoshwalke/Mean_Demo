import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
//import { Location } from '@angular/common';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  offerForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.offerForm = new FormGroup({
      'txtName': new FormControl('', [Validators.required]),
      'txtStart': new FormControl('',[Validators.required]), 
      'txtDestination': new FormControl('',[Validators.required]),
      'txtCar': new FormControl('',[Validators.required]),
      'txtSeat':  new FormControl('',[Validators.required, Validators.min(0), Validators.max(8)])
    })
  }
  
  onSubmit() {
    console.log(this.offerForm);
  }

  goBack() {
    //this.location.back();
    //console.log(this.location);
  }

}
