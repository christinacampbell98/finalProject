import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient) { }
  
  getAllBookings(): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.get('http://localhost:5000/api/bookings', {headers})
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
}
