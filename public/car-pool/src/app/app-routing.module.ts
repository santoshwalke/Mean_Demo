import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { BookRideComponent } from './ride/book-ride/book-ride.component';
import { ShowRideComponent } from './ride/show-ride/show-ride.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {   path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'show_ride', component: ShowRideComponent
    },
    {
        path: 'book_ride', component: BookRideComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
