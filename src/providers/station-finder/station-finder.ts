import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, Input} from '@angular/core';
import {LocationProvider} from "../location/location";

interface userLocation {
  myLocation: {
    long: number,
    lat: number
  }
}

@Injectable()
export class StationFinderProvider {

  @Input() currentLocation: any;

  apiUrl: string;
  authHeader: any;

  //currentLocation: string;

  constructor(public http: HttpClient,
              public locationProvider: LocationProvider) {

  }

  ionViewDidLoad() {
  };

  findVBBStationByLocation(userLocation) {
    /*
    results: How many stations shall be shown? Default: 8.
    distance: Maximum distance in meters. Default: null.
    stations: Show stations around. Default: true.
    poi: Show points of interest around. Default: false.
      */

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
      /*
      return new Promise(resolve => {
        this.http.get(this.apiUrl)
          .subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          })
      });*/
    }
  }
}
