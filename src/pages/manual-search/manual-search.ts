import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  time: string;
  minute_slider: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualSearchPage');
    this.time = 'departure';
    this.minute_slider = 45;
  }

  setDeparture(event) {
    this.minute_slider = event.value;
  }

}
