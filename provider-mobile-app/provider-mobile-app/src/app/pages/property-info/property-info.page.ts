import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
 import {ListingsService} from '../../services/listings.service';
import {Listings} from '../../models/listings';
// import {BookingsService} from '../../services/bookings.service';
// import {Bookings} from '../../models/bookings';
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

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,private listingService: ListingsService) {
    this.id= {'id':parseInt(localStorage.getItem('propertyId'))};
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

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();


}
edit(){
  this.navCtrl.navigateForward('/edit-rental');
}
bookings(){
  localStorage.setItem('listingid', this.property.id.toString())
  this.navCtrl.navigateForward('/booking-request');
}
delete(){
  this.listingService.deleteProperty(this.id).then(res=>{
    
    this.navCtrl.navigateForward('/explore');
    this.property=res;

  }).catch(err=>{
    console.log(err);
  })
}

}
