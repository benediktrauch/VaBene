import { Component } from '@angular/core';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  myLocation = {
    long: 13.377704,
    lat: 52.516275
  };

  myMap = {
    zoom: 5
  };

  constructor() {
  }

  ionViewDidLoad() {
    this.getPosition();
  };

  public getPosition() {
    console.log("getPosition");
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.myLocation.long = position.coords.longitude;
      this.myLocation.lat = position.coords.latitude;
      this.myMap.zoom = 15;
    })
  }

}
