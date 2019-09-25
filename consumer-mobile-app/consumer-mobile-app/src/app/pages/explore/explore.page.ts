import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Listings} from '../../models/listings';
import {ListingsService} from '../../services/listings.service';
import {PropertyInfoPage} from '../property-info/property-info.page';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  public listings: any;
  public listing:{};


  constructor(private navCtrl: NavController,private listingsService: ListingsService) {
   }

  ngOnInit() {
    this.listings= this.listingsService.listings;
    
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
