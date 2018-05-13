import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {StationFinderProvider} from "../../providers/station-finder/station-finder";

/**
 * Generated class for the LocationSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location-search',
  templateUrl: 'location-search.html',
})
export class LocationSearchPage {


  myLocation = {
    long: 13.377704,
    lat: 52.516275
  };

  myMap = {
    zoom: 5
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public StationFinderProvider: StationFinderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationSearchPage');
    this.getPosition();
  };

  public getPosition() {
    console.log("getPosition");
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.myLocation.long = position.coords.longitude;
      this.myLocation.lat = position.coords.latitude;
      this.myMap.zoom = 15;
      //console.log("this.StationFinderProvider.test(this.myLocation)");
      //this.StationFinderProvider.test(this.myLocation);
    })
  }

}
