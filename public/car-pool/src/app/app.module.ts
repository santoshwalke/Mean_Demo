import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { BookRideComponent } from './ride/book-ride/book-ride.component';
import { ShowRideComponent } from './ride/show-ride/show-ride.component';
import { OfferRideComponent } from './ride/offer-ride/offer-ride.component';

import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PageNotFoundComponent,
    BookRideComponent,
    ShowRideComponent,
    OfferRideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
