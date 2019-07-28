import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import { UserService } from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public first: string;
  public email: string;
  public password: string;
  public last: string;
  public role: string;
  public phone: string;



  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private userService: UserService) { }

  ngOnInit() {
  }

  create(){
    const newUser ={
      firstName: this.first,
      lastName: this.last,
      email: this.email,
      phone: this.phone,
      password: this.password
    }
    this.userService.addUser(newUser).then(res => {
      this.navCtrl.navigateForward('/explore', {
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
      subHeader: 'Failed to sign up',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
  login(){
    this.navCtrl.navigateForward('home');
  }

}
