export class Listings {
    id: number;
    // providerId: number;
    title: string;
    description: string;
    location: string;
    pricePerNight: string;
    imgURL: string;

    constructor(idI, titleI, descriptionI, locationI, pricerPerNightI, imgURLI){
        this.id= idI;
        this.title= titleI;
        this.description = descriptionI;
        this.location = locationI;
        this.pricePerNight= pricerPerNightI;
        this.imgURL = imgURLI;
    }


}
