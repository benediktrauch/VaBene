import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleMaps } from '@google/maps'

/*
  Generated class for the ConnectionFinderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ConnectionFinderProvider {

  apiUrl: string;
  authHeader: any;
  origin: string;
  stops: string; // &waypoints=via:-37.81223%2C144.96254%7Cvia:-34.92788%2C138.60008
  destination: string;
  mode: string = "mode=transit";
  alternatives: string = "alternatives=true";
  arrival_time: string; //&arrival_time=1343641500
  departure_time: string; //&departure_time=1343641500
  transit_routing_preference: string = "transit_routing_preference=fewer_transfers";
  transit_mode: string = "transit_mode=train|tram|subway|bus|";
  API_KEY: string = "key=AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU";

  // https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=YOUR_API_KEY

  constructor(public http: HttpClient) {
    console.log('Hello ConnectionFinderProvider Provider');

    this.apiUrl = 'https://maps.googleapis.com/maps/api/directions/json?';
    this.origin = "origin=51.5276949%2C6.9267585";
    this.destination = "destination=50.1109220%2C8.6821270";
    //latitude: 51.5276949, longitude: 6.9267585
  }

  getConnection(origin?: string, stops?: string, destination?: string, time?: string) {

    console.log("Getting Connection");
    //this.origin += "";
    //this.destination+= "";

    this.apiUrl = this.apiUrl +this.origin + "&" + this.destination + "&" + this.mode + "&" + this.API_KEY;

    console.log(this.apiUrl);

    //this.apiUrl = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU";

    //console.log(this.apiUrl);

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return new Promise(resolve => {
      console.log(requestOptions);
      this.http.get(this.apiUrl, requestOptions).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }
}
