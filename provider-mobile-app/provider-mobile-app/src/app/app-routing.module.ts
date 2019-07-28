import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'rentals', loadChildren: './pages/rentals/rentals.module#RentalsPageModule' },
  { path: 'new-rental', loadChildren: './pages/new-rental/new-rental.module#NewRentalPageModule' },
  { path: 'update-rental', loadChildren: './pages/update-rental/update-rental.module#UpdateRentalPageModule' },
  { path: 'booking-request', loadChildren: './pages/booking-request/booking-request.module#BookingRequestPageModule' },
  { path: 'explore', loadChildren: './pages/explore/explore.module#ExplorePageModule' },
  { path: 'property-info', loadChildren: './pages/property-info/property-info.module#PropertyInfoPageModule' },
  { path: 'edit-rental', loadChildren: './pages/edit-rental/edit-rental.module#EditRentalPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
