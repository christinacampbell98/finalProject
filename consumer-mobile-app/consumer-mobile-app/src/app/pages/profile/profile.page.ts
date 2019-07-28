import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User= new User();
  id: any;

  constructor(private navCtrl: NavController, private userService: UserService) {
    this.id={"id": parseInt(localStorage.getItem("userid"))};

   }

  ngOnInit() {

  }
  ionViewWillEnter() {
    console.log({"userid":this.id});
    this.userService.getUserByID(this.id).then(res=>{
      console.log("test: ")
      console.log(res);
      this.user=res;

      }).catch(err=>{
        console.log(err);
      })


  }
  explore(){
    this.navCtrl.navigateForward('explore');
}
  saved(){    this.navCtrl.navigateForward('saved');
}
  trips(){    this.navCtrl.navigateForward('trips');
}
  inbox(){    this.navCtrl.navigateForward('inbox');
}
  profile(){    this.navCtrl.navigateForward('profile');
}

}
