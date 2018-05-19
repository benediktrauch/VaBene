import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, Input} from '@angular/core';

@Injectable()
export class StationFinderProvider {

  @Input() currentLocation: any;

  apiUrl: string;
  authHeader: any;

  //currentLocation: string;

  constructor(public http: HttpClient) {

  }

  ionViewDidLoad() {
  };

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
