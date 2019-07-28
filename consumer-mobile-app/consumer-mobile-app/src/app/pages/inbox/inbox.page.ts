import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

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
