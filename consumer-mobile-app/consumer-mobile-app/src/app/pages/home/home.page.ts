import { Component,OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import { User } from '../../models/user';
import {UserService} from '../../services/user.service';
import {
  trigger,state,style,animate,transition,} from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
  

})
export class HomePage implements OnInit{
  public email: string;
  public password: string;
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private userService: UserService) {
  }
  ngOnInit(){}
  register(){this.navCtrl.navigateForward('register')}

  login() {
    //this is working functionality code for login, but must be connected to the database to work 
    // I have removed the database functionalities and made the page static
    this.navCtrl.navigateBack('explore');
    // const authUser = { 
    //   email: this.email,
    //   password: this.password}
    //   console.log(authUser);

    // this.userService.logIn(authUser).then(res => {
    //   const testId = localStorage.getItem('userid');
    //   console.log(res);
    //   this.navCtrl.navigateForward('explore', {
    //     queryParams:
    //     { user:res }
    //   });
    // }).catch(err => {
    //   this.presentAlert(err);
    // });
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
