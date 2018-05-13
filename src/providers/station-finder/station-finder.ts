import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, Input} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';

/*
  Generated class for the StationFinderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StationFinderProvider {

  @Input() currentLocation: any;

  apiUrl: string;
  authHeader: any;
  //currentLocation: string;
  searchString: string;

  constructor(public http: HttpClient, public apollo: Apollo) {
    //this.apiUrl = 'https://api.deutschebahn.com/stada/v2/stations?category=1&federalstate=Nordrhein-Westfalen';
    //https://api.deutschebahn.com/stada/v2/stations?searchstring=E%3F%3F%3F%3F%20Hbf&federalstate=Nordrhein-Westfalen
    this.apiUrl = 'https://api.deutschebahn.com/stada/v2/stations?category=1,2&federalstate=Nordrhein-Westfalen';
    this.authHeader = new HttpHeaders().set('Authorization', 'Bearer 8ed13f9c8686b47066ada6de3446e006');
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad: this.currentLocation");
  };

  /*test(location: any) {
    console.log("Apollo GrapQL");
    console.log(location.long);
    console.log(location.lat);

    this.apollo.query({
      query: gql`{
        nearby(latitude: ${ location.lat }, longitude: ${ location.long }, radius: 3000) {
          stations(count: 5) {
            name
            primaryEvaId
            category
            location {
              latitude
              longitude
            }
          }
        }
      }`
    })
      .subscribe(console.log);
  }

  getStations() {
    console.log("Getting Stations");
    return new Promise(resolve => {
      this.http.get(this.apiUrl, {headers: this.authHeader}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }*/

}
