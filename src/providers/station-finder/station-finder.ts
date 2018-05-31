import {HttpClient} from '@angular/common/http';
import {Injectable, Input} from '@angular/core';
import {LocationProvider} from "../location/location";

@Injectable()
export class StationFinderProvider {

  @Input() currentLocation: any;

  apiUrl: string;

  constructor(public http: HttpClient,
              public locationProvider: LocationProvider) {

  }

  ionViewDidLoad() {
  };

  findVBBStationByLocation(userLocation) {

    if(!userLocation){
      userLocation = this.locationProvider.getUserLocation();
    }

    this.apiUrl = `https://2.vbb.transport.rest/stations/nearby?latitude=${userLocation.lat}&longitude=${userLocation.long}&distance=100&results=3`;
    return this.http.get(this.apiUrl);
  }

  getVBBStation(searchString: string) {
    this.apiUrl = `https://2.vbb.transport.rest/stations?query=${searchString}&fuzzy=true`;

    if (searchString.length > 2) {

      return this.http.get(this.apiUrl);
    }
  }
}
