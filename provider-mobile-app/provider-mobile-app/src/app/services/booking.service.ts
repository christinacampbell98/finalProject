import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  createBooking(newBooking) {
    return new Promise((resolve, reject) => {
    const headers = new HttpHeaders();
    // headers.append("Accept","http://localhost:5000/api/auth/login");
    this.http.post(environment.BaseURL + '/api/bookings', newBooking, {headers}).subscribe((response: any)=>{
      resolve(response);
    },
    (err)=> {
      console.log(err);
      reject(err);
    }

    );

  });
}
updateStatus(req):Promise<any>{
  return new Promise<any>((resolve, reject) => {
    const headers = new HttpHeaders();
    this.http.patch('http://localhost:5000/api/bookings/updateBookingStatus',req, {headers})
    .subscribe((response:any) =>{

    },
    (err)=> {
      reject("err " +err);
    }

    );

  });
}



public getBookings(id: any):Promise<any>{
  console.log(id);
  return new Promise <any>((resolve, reject) =>{
    const headers = new HttpHeaders();
    this.http.post("http://localhost:5000/api/bookings/list",id, {headers})
    .subscribe((response:any) =>{
      console.log({"res":response});
      resolve(response);
    },
    (err)=>{
      reject("err " + err);
    });
  });
}
  // public updateToAccepted(Booking: any){
  //   return new Promise((resolve, reject) =>{
  //     const headers = new HttpHeaders();
  //     this.http.patch(environment.BaseURL + '/api/booking/updateBookingStatusToAccepted', Booking, { headers }).subscribe((response: any)=>{
        
  //       resolve(response);
  //     },
  //     (err: any) => {
  //       console.log(err);
  //       reject(err);
  //     });
  //   });
  // }
  // public updateToRejected(Booking: any){
  //   return new Promise((resolve, reject) =>{
  //     const headers = new HttpHeaders();
  //     this.http.patch(environment.BaseURL + '/api/booking/updateBookingStatusToRejected', Booking, { headers }).subscribe((response: any)=>{
        
  //       resolve(response);
  //     },
  //     (err: any) => {
  //       console.log(err);
  //       reject(err);
  //     });
  //   });
  // }
}