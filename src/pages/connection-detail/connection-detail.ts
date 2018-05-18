import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ConnectionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connection-detail',
  templateUrl: 'connection-detail.html',
})
export class ConnectionDetailPage {

  details: boolean = true;
  connectionIndex: number;

  connection: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.connectionIndex = this.navParams.data;
  }

  ionViewDidLoad() {}
}
