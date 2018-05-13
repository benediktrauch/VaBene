import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConnectionDetailPage} from "../connection-detail/connection-detail";

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  details: boolean = false;
  params: Object;
  ConnectionDetailPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ConnectionDetailPage = "ConnectionDetailPage";
    this.params = { id: 42 };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

}
