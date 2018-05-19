import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SettingsProvider} from "../settings/settings";

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface userLocation {
  userLocation: {
    long: number,
    lat: number
  }
}


@Injectable()
export class LocationProvider {

  userLocation;

  constructor(private settingsProvider: SettingsProvider) {
    this.userLocation = {
      long: 13.377704,
      lat: 52.516275
    }
  }

  getUserLocation() {
    return this.userLocation;
  }

  setUserLocation(newLocation: {}) {
    this.userLocation = newLocation;
  }

  findUserLocation() {

    if (this.settingsProvider.getTestMode()) {
      this.userLocation.long = 13.438197;
      this.userLocation.lat = 52.540869;
      this.setUserLocation(this.userLocation);
      return this.userLocation;
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("getPosition");
        console.log(position);
        this.userLocation.long = position.coords.longitude;
        this.userLocation.lat = position.coords.latitude;
        this.setUserLocation(this.userLocation);
        return this.userLocation;
      })
    }
  }

}
