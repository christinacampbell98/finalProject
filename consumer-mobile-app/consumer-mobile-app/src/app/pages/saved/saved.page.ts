import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
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
