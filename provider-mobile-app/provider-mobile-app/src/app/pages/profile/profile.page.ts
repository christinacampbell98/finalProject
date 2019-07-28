import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ProviderService} from '../../services/provider.service';
import {Provider} from '../../models/provider';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: Provider= new Provider();
  id: any;

  constructor(private navCtrl: NavController, private providerService: ProviderService) {
    this.id={"id": parseInt(localStorage.getItem("userid"))};

   }

  ngOnInit() {

  }
  ionViewWillEnter() {
    console.log({"userid":this.id});
    this.providerService.getUserByID(this.id).then(res=>{
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
