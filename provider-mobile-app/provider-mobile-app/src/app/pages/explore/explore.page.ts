import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {BookingService} from '../../services/booking.service';
import {Listings} from '../../models/listings';
import {ProviderService} from '../../services/provider.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage {
  id: any;
  public listings: Listings= new Listings();;




  constructor(private providerService: ProviderService, private navCtrl: NavController,private bookingService: BookingService, private alertCtrl: AlertController) { 
    this.id= {'id':parseInt(localStorage.getItem('userid'))};
  }

  ionViewWillEnter() {
    this.providerService.getListings(this.id).then(res=>{
      if (res.length){
      console.log(res);
      this.listings=res;
      }
      else {
        this.presentAlert();
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'No listings found',
      message: 'You have no listings, go to New Rentals',
      buttons: ['OK']
    });

    await alert.present();
  }
  viewProperty(listing){
    localStorage.setItem("propertyId", listing.id);
    this.navCtrl.navigateForward('property-info', { 
      queryParams:
      {listing: listing.id}
  });
  }
  explore(){
    this.navCtrl.navigateForward('/explore');
  }
  createNewRental(){
    this.navCtrl.navigateForward('/new-rental');
  }
  profile(){
    this.navCtrl.navigateForward('/profile');
  }

}
