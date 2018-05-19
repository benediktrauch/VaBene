import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LocationProvider} from "../../providers/location/location";
import {SettingsProvider} from "../../providers/settings/settings";

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

  //Greifswalder Str. 169, 10409 Berlin, Deutschland
  //Breitengrad : 52.540869 | Längengrad : 13.438197

  myMap = {
    zoom: 5
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public locationProvider: LocationProvider,
              private settingsProvider: SettingsProvider) {
    this.locationProvider.findUserLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationSearchPage');
    this.myLocation = this.locationProvider.getUserLocation();
    this.myMap.zoom = 15;
    //this.getPosition();
  };

/*
  public getPosition() {

    if (this.settingsProvider.getTestMode()) {
      this.myLocation.long = 13.438197;
      this.myLocation.lat = 52.540869;
      this.myMap.zoom = 15;
      this.locationProvider.setUserLocation(this.myLocation);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("getPosition");
        console.log(position);
        this.myLocation.long = position.coords.longitude;
        this.myLocation.lat = position.coords.latitude;
        this.myMap.zoom = 15;
        this.locationProvider.setUserLocation(this.myLocation);
      })
    }
  }
*/

  findStationNearby() {

  }
}
