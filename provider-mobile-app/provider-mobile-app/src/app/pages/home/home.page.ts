import { Component,OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import { Provider } from '../../models/provider';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public email: string;
  public password: string;
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private providerService: ProviderService) {
  }
  ngOnInit(){}
  register(){this.navCtrl.navigateForward('register')}

  login() {
    // let authUser = new User(this.eamil,this.password); -- I would do this (add user model)
    const authUser = { 
      email: this.email,
      password: this.password}
      console.log(authUser);

    this.providerService.logIn(authUser).then(res => {
      const testId = localStorage.getItem('userid');
      console.log(res);
      this.navCtrl.navigateForward('explore', {
        queryParams:
        { user:res }
      });
    }).catch(err => {
      this.presentAlert(err);
    });
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }



}
