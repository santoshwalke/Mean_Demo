import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { BookRideComponent } from './ride/book-ride/book-ride.component';
import { ShowRideComponent } from './ride/show-ride/show-ride.component';
import { OfferRideComponent } from './ride/offer-ride/offer-ride.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'show_ride', component: ShowRideComponent, canActivate: [AuthGuardService]
    },
    {
        path: 'offer_ride', component: OfferRideComponent, canActivate: [AuthGuardService]
    },
    {
        path: 'book_ride', component: BookRideComponent, canActivate: [AuthGuardService]
    },
    {
        path: '**', component: PageNotFoundComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
