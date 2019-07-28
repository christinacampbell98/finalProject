import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesComponent } from './properties/properties.component';
import { BookingsComponent } from './bookings/bookings.component';


const routes: Routes = [
  {path: '', component:DashboardComponent, children:[
    {path: 'properties', component:PropertiesComponent},
    {path: 'bookings', component: BookingsComponent},
    {path: 'users', component:UsersComponent}
  ]},
];
export const routing= RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
