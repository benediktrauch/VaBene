import {Component, Input, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";
import {DateTimeServiceProvider} from "../../providers/date-time-service/date-time-service";

/**
 * Generated class for the CurrentTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-current-trip',
  templateUrl: 'current-trip.html',
})
export class CurrentTripPage implements OnInit {

  @Input() connectionIndex: any;

  connection: any;

  myLocation = {
    long: 13.377704,
    lat: 52.516275
  };

  myMap = {
    zoom: 15
  };

  allConnections: any;

  myDate = Date.now();
  myDateObject = new Date();

  currentLeg: any;
  currentStop: any;
  nextStop: any;

  legCounter: number = 0;
  stepList: any[];
  stopCounter: number = 0;

  constructor(public nav: NavController,
              private dataExchangeProvider: DataExchangeProvider,
              private dateTimeService: DateTimeServiceProvider,
              public navParams: NavParams) {
    if (typeof this.navParams.data.connectionIndex !== 'number') {
      this.connectionIndex = 2;
      //this.nav.setRoot('ManualSearchPage');
    } else {
      this.connectionIndex = this.navParams.data.connectionIndex;
    }
    this.allConnections = this.dataExchangeProvider.getConnectionSearchResults();
  }

  ngOnInit() {
    console.log(this.connectionIndex);
    if (this.connectionIndex) {
      this.connection = this.allConnections[this.connectionIndex];
    } else {
      this.connection = this.allConnections[0];
    }
  }

  ionViewDidLoad() {
    if (this.connectionIndex) {
      this.connection = this.allConnections[this.connectionIndex];
    } else {
      this.connection = this.allConnections[0];
    }
    this.liveTracking();
    this.startTimer();
  }

  liveTracking() {
    //console.log(Date.now() < this.dateTimeService.getTimeStampFromString(this.connection.arrival));

    console.log(this.connection);

    // JETZT zwischen Abfahrt und Ankunft
    if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.departure)&&
    Date.now() < this.dateTimeService.getTimeStampFromString(this.connection.arrival)) {

      // Gab es eine Veränderung seit dem letzten Schritt? oder nicht initialisiert
      if (!this.currentStop || Date.now() > this.dateTimeService.getTimeStampFromString(this.currentStop.departure)) {

        // Aktuellen Schritt suchen
        for (let legIterator = 0; legIterator < this.connection.legs.length; legIterator++) {
          if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.legs[legIterator].departure)
            && Date.now() < this.dateTimeService.getTimeStampFromString(this.connection.legs[legIterator].arrival)) {
            this.legCounter = legIterator;
            this.currentLeg = this.connection.legs[legIterator];

            // Zwischenhalte auflisten
            if (this.currentLeg.passed.length > 0) {
              this.stepList = this.currentLeg.passed;
            }
          }
        }

        this.myLocation.lat = this.stepList[0].station.location.latitude;
        this.myLocation.long = this.stepList[0].station.location.longitude;

        if(this.stepList) {
          // Letzten Halt entfernen
          while (Date.now() > this.dateTimeService.getTimeStampFromString(this.stepList[0].departure)) {
            this.stepList.shift();
          }
        }
      }

      console.log(this.currentLeg);
      /*

            if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.legs[this.legCounter].departure)) {
              console.log(this.connection.legs[this.legCounter]);
              if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.legs[this.legCounter].arrival)) {
                this.legCounter++;
                this.stopCounter = 0;
                this.stepList = [];
                //this.stepList.splice(0,this.stepList.length);
              } else if(this.connection.legs[this.legCounter].mode !== 'walking') {
                console.log(this.connection.legs[this.legCounter]);
                this.currentStop = this.connection.legs[this.legCounter].passed[this.stopCounter];
                for(let i = this.stopCounter; i < this.connection.legs[this.legCounter].passed.length; i++){
                  this.stepList.push(this.connection.legs[this.legCounter].passed[i]);
                }
                console.log(this.stepList);
                if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.legs[this.legCounter].passed[this.stopCounter])) {
                  this.stopCounter++;
                }
              }
            }

      */

      //this.dateTimeService.getTimeStampFromString();
    } else if (Date.now() < this.dateTimeService.getTimeStampFromString(this.connection.departure)) {
      console.log("Bald geht's los");
    } else if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.arrival)){
      console.log("Angekommen");
    }
    else {
      console.log("Ausserhalb des Zeitraums");
    }
  }

  getVVBTime(time: string) {
    return this.dateTimeService.getVBBTime(time);
  }

  startTimer() {
    setInterval(() => {         //replaced function() by ()=>
      this.liveTracking();
      /*let currentDate = Date.now();
      console.log(currentDate); // just testing if it is working*/
    }, 10000);
  }


}
