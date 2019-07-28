import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: Array<Users>;
  navItems: Array<any> = [
    {name: 'users', path:'/users'},
    {name: 'bookings', path:'/bookings'},
    {name: 'properties' , path:'/properties' }
  ]
  constructor(private router: Router, private userServices: UsersService){
    // this.users = this.userServices.getListItems();
  }

  ngOnInit(){
  }
  navTo(page) {
    this.router.navigate(['/dashboard'+ page.path]);
  }

}
