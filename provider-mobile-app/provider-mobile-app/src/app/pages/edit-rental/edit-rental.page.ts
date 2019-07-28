import { Component, OnInit } from '@angular/core';
import {ListingsService} from '../../services/listings.service';
import {Listings} from '../../models/listings';
import {NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.page.html',
  styleUrls: ['./edit-rental.page.scss'],
})
export class EditRentalPage implements OnInit  {
  id: any;
  property: Listings= new Listings();
  /* title: string;
  description: string;
  location: string;
  pricePerNight: string;
  imgURL: string
  newProp: any; */
  constructor(public alertCtrl: AlertController, private listingService: ListingsService, private navCtrl: NavController) {
    this.id= {'id':localStorage.getItem('userid')};


   }

  ngOnInit() {
    this.listingService.getPropertyID(this.id).then(res=>{
      console.log("test: ")
      console.log(res);
      this.property=res;

      }).catch(err=>{
        console.log(err);
      })


}

  save(){
    /* this.newProp = {
      title: this.title,
      description: this.description,
      location: this.location,
      pricePerNight: this.pricePerNight,
      imgURL: this.imgURL,
      id: this.property.id
    } */
    console.log(this.property,"new Prop")
    debugger
    this.listingService.updateProperty(this.property).then(res=>{
      this.presentAlert("Edit successful! Please return to listings.");
      this.property=res;

      }).catch(err=>{
        console.log(err);
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
  back(){
    this.navCtrl.navigateBack('explore');
  }
}
