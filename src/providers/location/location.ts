import {Injectable} from '@angular/core';
import {SettingsProvider} from "../settings/settings";
import {Loading} from "ionic-angular";

@Injectable()
export class LocationProvider {

  userLocation: any;

  loading: Loading;
  isWatching: boolean = false;
  coords: any;
  watchProcess: any;
  watchOptions: any = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0
  };

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
        this.userLocation.long = position.coords.longitude;
        this.userLocation.lat = position.coords.latitude;
        this.setUserLocation(this.userLocation);
        return this.userLocation;
      })
    }
  }

  stopWatching() {
    this.isWatching = false;
  }

  startWatching(): void {

    if (!this.isWatching) {
      if (navigator && navigator.geolocation) {
        this.watchProcess = navigator.geolocation.watchPosition((position) => {

          this.userLocation.long = position.coords.longitude;
          this.userLocation.lat = position.coords.latitude;

          this.setUserLocation(this.userLocation);

        }, (err) => (
          console.error(err)
        ), this.watchOptions);

        this.isWatching = true;
      } else {
        this.loading.dismiss();
      }
    }
  }
}
