import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {LocationSearchPage} from "../../pages/location-search/location-search";

/**
 * Generated class for the NavigationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {


  constructor(public nav: NavController) {  }

  openSearh() {
    this.nav.setRoot('ManualSearchPage');
  }
  openLocationSearh() {
    this.nav.setRoot('LocationSearchPage');
  }
}
