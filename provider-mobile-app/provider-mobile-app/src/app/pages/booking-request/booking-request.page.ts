import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking';
@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.page.html',
  styleUrls: ['./booking-request.page.scss'],
})
export class BookingRequestsPage {
  propertyId: any;
  
  bookings: Booking = new Booking();

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private bookService: BookingService,
    
  ) { 
    this.propertyId = {"propertyId": parseInt(localStorage.getItem("listingid"))};
    
  }

  ionViewWillEnter()  {
    this.bookService.getBookings(this.propertyId).then(res=>{
      console.log(res);
      this.bookings=res;
    }).catch(err=>{
      console.log(err);
    })
  }
  back(){
    this.navCtrl.navigateBack('explore');
  }
  accept(id){
    let req = {
      "status": "accept",
      "id": id
    }
    this.bookService.updateStatus(req).then(res=>{
      this.presentAlert("Please reload the page to see the updates");
    }).catch(err=>{
      this.presentAlert("Please reload the page to see the updates");
    })
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