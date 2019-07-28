import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {ListingsService} from '../../services/listings.service';
import {Listings} from '../../models/listings';
import {BookingsService} from '../../services/bookings.service';
import {Bookings} from '../../models/bookings';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';
// import { runInThisContext } from 'vm';


@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.page.html',
  styleUrls: ['./property-info.page.scss'],
})
export class PropertyInfoPage  {
  id: any;
  property: Listings= new Listings();
  start: string;
  end: string;
  booking: Bookings = new Bookings();
  user: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,private listingService: ListingsService, private bookingService: BookingsService) {
    this.id= {'id':parseInt(localStorage.getItem('id'))};
  }

  ionViewWillEnter() {
    this.listingService.getPropertyID(this.id).then(res=>{
      console.log("test: ")
      console.log(res);
      this.property=res;

      }).catch(err=>{
        console.log(err);
      })


  }

  back(){
    this.navCtrl.navigateForward('explore');
  }
  createBooking(){
    // this.user=localStorage.getItem('userid');
    this.booking={
      dateFrom: this.start.slice(0,10),
      dateTo: this.end.slice(0,10),
      userId: localStorage.getItem('userid'),
      propertyId: this.property.id,
      status: "not approved"
    }


    this.bookingService.createBooking(this.booking).then(res =>{
      this.presentAlert("Booking successful!");
    }).catch(err => {
      this.presentAlert(err);
    });  
  }
  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();


}
}
