import { Injectable } from '@angular/core';
import {Users} from './users';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<Users>;
  loggedInUser: Users;

  constructor(private http: HttpClient) {}

    logIn(Authuser) { // This should be type user

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post('http://localhost:5000/api/auth/login', Authuser, {headers})
      .subscribe(response =>{
        //localStorage.setItem('userid', response);
        console.log(response);
        resolve(response);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
   }

   getAllUsers(){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.get('http://localhost:5000/api/users', {headers})
      .subscribe(response =>{
        //localStorage.setItem('userid', response);
        console.log(response);
        resolve(response);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });

}

  setLoggedInUser(user: Users) { // This should be type user
    this.loggedInUser = user;
  }

  getLoggedInUser(): Users { // This should be type user
    return this.loggedInUser;
  }

}
