import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providers: Array<Provider>;
  loggedInProvider: Provider;

  constructor(private http: HttpClient) { 

  }
  public logIn(Authuser) { // This should be type user

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post('http://localhost:5000/api/auth/loginP', Authuser, {headers})
      .subscribe((response:any) =>{
        localStorage.setItem('userid', response.id);
        console.log(response);
        resolve(response);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });
   }

  setLoggedInUser() { // This should be type user
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      // headers.append("Accept","http://localhost:5000/api/auth/login");
      this.http.get(environment.BaseURL + '/api/users/reg', {headers}).subscribe((response: any)=>{
        console.log(response);
        localStorage.setItem('userid', response[0].id);
        resolve(response);
      },
      (err)=> {
        console.log(err);
        reject(err);
      }
  
      );
  
    });
  }

  getLoggedInUser(): Provider { // This should be type user
    return this.loggedInProvider;
  }
  addUser(newUser) {
    return new Promise((resolve, reject) => {
    const headers = new HttpHeaders();
    // headers.append("Accept","http://localhost:5000/api/auth/login");
    this.http.post(environment.BaseURL + '/api/auth/registerP', newUser, {headers}).subscribe((response: any)=>{
      console.log(response.id);
      resolve(response);
    },
    (err)=> {
      console.log(err);
      reject(err);
    }

    );

  });
}
public getListings(id: any):Promise<any>{
  console.log(id);
  return new Promise <any>((resolve, reject) =>{
    const headers = new HttpHeaders();
    // headers = headers.append("Content-Type", "application/json");
    this.http.post("http://localhost:5000/api/bookings/properties",id, {headers})
    .subscribe(response =>{
      console.log({"res":response});
      resolve(response);
    },
    (err)=>{
      reject("err " + err);
    });
  });
}
getUserByID(userID):Promise<any>{
  return new Promise<any>((resolve, reject) => {
    const headers = new HttpHeaders();
    console.log("New run")
    this.http.post('http://localhost:5000/api/users/user',userID, {headers})
    .subscribe(response =>{
      console.log({"help":response});
      resolve(response[0]);
    },
    (err)=> {
      reject("err " +err);
    }

    );

  });
}
}

