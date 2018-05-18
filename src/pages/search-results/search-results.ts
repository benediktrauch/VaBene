import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";

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
  connectionIndex: number;
  ConnectionDetailPage: any;

  searchResults: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataExchangeProvider: DataExchangeProvider) {
    this.ConnectionDetailPage = "ConnectionDetailPage";
    this.searchResults = this.dataExchangeProvider.getConnectionSearchResults();

  }

  ionViewDidLoad() {
  }
}
