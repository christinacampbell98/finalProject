import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ListingsService} from '../../services/listings.service';
import {Listings} from '../../models/listings';


@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  listings : any;
  ids : string;
  properties: any [];

  constructor(private navCtrl: NavController, private listingService: ListingsService) { 
    this.ids = localStorage.getItem('saved');
    this.listings = this.listingService.listings;
    this.properties=[];
  }

  ngOnInit() {
    console.log(this.listingService.saved);
    for (let i=0; i < this.listingService.saved.length; i++) {
      this.properties.push(this.listings[this.listingService.saved[i]-1]);
    }  
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
logout(){    this.navCtrl.navigateForward('home');
}
viewProperty(listing){
  localStorage.setItem("id", listing.id);
  this.navCtrl.navigateForward('property-info', { 
    queryParams:
    {listing: listing.id}
});
}

}
