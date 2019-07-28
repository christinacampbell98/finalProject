import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {ListingsService} from '../../services/listings.service';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.page.html',
  styleUrls: ['./new-rental.page.scss']
})
export class NewRentalPage implements OnInit {
  title: string;
  location: string;
  description: string;
  pricePerNight: string;
  imgURL: string;


  constructor(private navCtrl: NavController, private listingsService: ListingsService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  rentals(){ this.navCtrl.navigateForward('rentals')}

  create(){
    const newUser ={
      providerId: parseInt(localStorage.getItem('userid')),
      title: this.title,
      location: this.location,
      description: this.description,
      pricePerNight: this.pricePerNight,
      imgURL: this.imgURL
    }
    this.listingsService.addProperty(newUser).then(res => {
      this.presentAlert("Your listing has been created!")


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
  back(){
    this.navCtrl.navigateBack('explore');
  }
   
  

}
