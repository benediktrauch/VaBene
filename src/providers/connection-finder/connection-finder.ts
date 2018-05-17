import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as googleMapsClient from '@google/maps';

/*
  Generated class for the ConnectionFinderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class ConnectionFinderProvider {

  gmClient = googleMapsClient.createClient({
    key: 'AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU',
    Promise: Promise
  });

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

    /*origin: LatLng | String | google.maps.Place,
      destination: LatLng | String | google.maps.Place,
      travelMode: TravelMode,
      transitOptions: TransitOptions,
      drivingOptions: DrivingOptions,
      unitSystem: UnitSystem,
      waypoints[]: DirectionsWaypoint,
      optimizeWaypoints: Boolean,
      provideRouteAlternatives: Boolean,
      avoidHighways: Boolean,
      avoidTolls: Boolean,
      region: String*/

    /*{
      origin: 'Chicago, IL',
        destination: 'Los Angeles, CA',
      waypoints: [
      {
        location: 'Joplin, MO',
        stopover: false
      },{
        location: 'Oklahoma City, OK',
        stopover: true
      }],
      provideRouteAlternatives: false,
      travelMode: 'DRIVING',
      drivingOptions: {
      departureTime: new Date(/!* now, or future date *!/),
        trafficModel: 'pessimistic'
    },
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }*/

      //origin: '51.5276949, 6.9267585',
      //destination: '50.1109220, 8.6821270',
      //travelMode: 'TRANSIT'

  test() {
    this.gmClient.geocode({
      address: '1600 Amphitheatre Parkway, Mountain View, CA'
    })
      .asPromise()
      .then((response) => {
        console.log(response.json.results);
      })
      .catch((err) => {
        console.log(err);
      });

    this.gmClient.placesNearby({
      location: '51.5276949, 6.9267585'
    }, function(err, response) {
      console.log("nearby");
      if (!err) {
        console.log(response.json.results);
      }
    });

    this.gmClient.directions({
      origin: 'Town Hall, Sydney, NSW',
      destination: 'Parramatta, NSW',
      mode: 'transit',
      alternatives: true,
      transit_mode: ['bus', 'rail'],
      transit_routing_preference: 'fewer_transfers',
    })
      .asPromise()
      .then((response) => {
        console.log(response.json.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getVBBConnection(connection: any) {
    console.log("VBB Connection");
    //this.apiUrl = this.apiUrl +this.origin + "&" + this.destination + "&" + this.mode + "&" + this.API_KEY;

    this.apiUrl = `https://2.vbb.transport.rest/journeys
    ?from=${connection.start.id}\
    &to=${connection.end.id}\
    &via=${connection.stopover.id}\
    &passedStations=true\n
    &transfers=5\n
    &transferTime=0\n
    &accessibility=none\n
    &bike=false\n
    &tickets=false\n
    &suburban=true\n
    &subway=true\n
    &tram=true\n
    &bus=true\n
    &ferry=true\n
    &express=true\n
    &regional=true`;

    /*
    bike: Return only bike-friendly journeys. Default: false.
      tickets: Return information about available tickets. Default: false.
      suburban: Include S-Bahn trains? Default: true.
      subway: Include U-Bahn trains? Default: true.
      tram: Include trams? Default: true.
      bus: Include buses? Default: true.
      ferry: Include ferries? Default: true.
      express: Include IC/ICE/EC trains? Default: true.
      regional: Include RE/RB/ODEG trains? Default: true.
*/


      //accessibility: Possible values: partial, complete. Default: none.

      return new Promise(resolve => {
      this.http.get(this.apiUrl)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, err => {
          console.log(err);
        })
    });
  }

  getConnection(origin?: string, stops?: string, destination?: string, time?: string) {

    console.log("Getting Connection");
    //this.origin += "";
    //this.destination+= "";

    this.apiUrl = this.apiUrl +this.origin + "&" + this.destination + "&" + this.mode + "&" + this.API_KEY;

    console.log(this.apiUrl);

    //this.apiUrl = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU";

    //console.log(this.apiUrl);

/*    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
    };*/

    const requestOptions = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
    };

    return new Promise(resolve => {
      console.log(requestOptions);
      this.http.get(this.apiUrl, requestOptions)
        .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }
}
