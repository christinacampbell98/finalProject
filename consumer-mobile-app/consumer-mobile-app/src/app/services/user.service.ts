import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;
  loggedInUser: User;

  constructor(private http: HttpClient) {
   }
   public logIn(Authuser):Promise<any> { // This should be type user

    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post('http://localhost:5000/api/auth/loginU', Authuser, {headers})
      .subscribe((response:any)=>{
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem('userid', response.id);
        console.log({"response:":response});
        resolve(response);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
   }

   logout(){
    localStorage.setItem("isLoggedIn", "false");
  }
   getUserByID(userID):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      console.log("New run")
      this.http.post('http://localhost:5000/api/users/user',userID, {headers})
      .subscribe(response =>{
        // localStorage.setItem('propertyID', response.id);
        console.log({"help":response});
        resolve(response[0]);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
  }


  setLoggedInUser(user: User) { // This should be type user
    this.loggedInUser = user;
  }

  getLoggedInUser(): User { // This should be type user
    return this.loggedInUser;
  }
  addUser(newUser) {
      return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      // headers.append("Accept","http://localhost:5000/api/auth/login");
      this.http.post(environment.BaseURL + '/api/auth/registerU', newUser, {headers}).subscribe((response: any)=>{
        console.log(response.id);
        localStorage.setItem('userid', response.id);
        resolve(response);
      },
      (err)=> {
        console.log(err);
        reject(err);
      }

      );

    });
  }

}
