import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StationFinderProvider } from "../../providers/station-finder/station-finder";

/**
 * Generated class for the ManualSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual-search',
  templateUrl: 'manual-search.html',
})
export class ManualSearchPage {

  departureSelection: string;
  myDate: {};
  minute_slider: number;
  current_time: Date = new Date();
  vehicleSelection: any[];
  vehicleFilter: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public StationFinderProvider: StationFinderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualSearchPage');

    this.departureSelection = 'departure';
    this.minute_slider = 45;
    this.vehicleFilter = {
      title: 'Filter',
      subTitle: 'Verkehrsmittel auswählen',
      mode: 'md'
    };

    this.vehicleSelection = [{
      type: 'ICE',
      name: 'ICE'
    }, {
      type: "RE",
      name: "Regionalexpress"
    }]

/*    let my_hour = this.current_time.getHours();
    let my_minute = this.current_time.getMinutes();
    this.myDate = {
      hour: my_hour,
      minute: my_minute
    };
    console.log(this.myDate);*/
  }

  setDeparture(event) {
    this.minute_slider = event.value;
  }

  logSelectedTime(event) {
    console.log(event);
  }
}
