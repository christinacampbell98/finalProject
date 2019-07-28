import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.page.html',
  styleUrls: ['./rentals.page.scss'],
})
export class RentalsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  newRentals(){ this.navCtrl.navigateForward('new-rental')}
  updateRentals(){ this.navCtrl.navigateForward('update-rental')}

}
