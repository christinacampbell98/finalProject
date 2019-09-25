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
export class PropertyInfoPage implements OnInit  {
  id: any;
  start: string;
  end: string;
  booking: Bookings = new Bookings();
  user: string;
  property: any;
  listings: any;
  save: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,private listingService: ListingsService, private bookingService: BookingsService) {
    // this.id= {'id':parseInt(localStorage.getItem('id'))};
    this.id = parseInt(localStorage.getItem('id'));
    this.listings = this.listingService.listings;
    this.save = localStorage.getItem('saved');
  }

  ngOnInit() {
    this.property=this.listings[this.id-1];
    // console.log(this.id.id);
    // this.listings.forEach(function (value){
    //   console.log(value.id);
    //   if (this.id.id == value.id){
    //     console.log("test");
    //     this.property=value;
    // this.listingService.getPropertyID(this.id).then(res=>{
    //   console.log("test: ")
    //   console.log(res);
    //   this.property=res;

    //   }).catch(err=>{
    //     console.log(err);
    //   })


  }

  back(){
    this.navCtrl.navigateForward('explore');
  }
  saved(property){
    this.listingService.saved.push(property.id);
    this.navCtrl.navigateForward('saved');
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
      header: 'Congrats!',
      message: "Booking was successful!",
      buttons: ['Dismiss']
    });
    await alert.present();


}
}
