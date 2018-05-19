import {Component} from '@angular/core';
import {ConnectionFinderProvider} from "../../providers/connection-finder/connection-finder";
import {StationFinderProvider} from "../../providers/station-finder/station-finder";
import {NavController} from "ionic-angular";
import {SearchResultsPage} from "../../pages/search-results/search-results";
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";

import {ToastController} from 'ionic-angular';


let now = new Date();

// TODO: Aktuellen Standort als Start

interface connection {
  start: {
    id: string,
    location: {
      type: string,
      latitude: number,
      longitude: number
    },
    name: string,
    relevance: number,
    score: number,
    type: string,
    weight: number
  },
  stopover: {
    id: string,
    location: {
      type: string,
      latitude: number,
      longitude: number
    },
    name: string,
    relevance: number,
    score: number,
    type: string,
    weight: number
  },
  end: {
    id: string,
    location: {
      type: string,
      latitude: number,
      longitude: number
    },
    name: string,
    relevance: number,
    score: number,
    type: string,
    weight: number
  },
  departureSelection: string,
  when: string,
  bike: boolean,
  tickets: boolean,
  suburban: boolean,
  subway: boolean,
  tram: boolean,
  bus: boolean,
  ferry: boolean,
  express: boolean,
  regional: boolean,
  transfers: number,
  transferTime: number,
  accessibility: string,
  results: number
}

//https://2.vbb.transport.rest/journeys?from=${connection.start.id}&to=${connection.end.id}&via=${connection.stopover.id}&when=${}
// &passedStations=true
// &transfers=5
// &transferTime=0
// &accessibility=none partial, complete. Default: none
// &bike=false
// &tickets=false
// &suburban=true
// &subway=true
// &tram=true
// &bus=true
// &ferry=true
// &express=true
// &regional=true`


@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  connection: any;

  stopoverBool: boolean = true;

  vehicleSelection: any;
  vehicleFilter: {};

  startResults: boolean = false;
  stopoverResults: boolean = false;
  endResults: boolean = false;
  startSelected: boolean = false;
  stopoverSelected: boolean = false;
  endSelected: boolean = false;
  startLoading: boolean = false;
  stopoverLoading: boolean = false;
  endLoading: boolean = false;
  stations: any;

  h24: Date = now;
  toDay: Date = now;

  myTime: any;
  myDate: any;

  searchingConnection: boolean = false;

  minute_slider: number;

  departureSelection: string;

  constructor(public StationFinderProvider: StationFinderProvider,
              public ConnectionFinderProvider: ConnectionFinderProvider,
              public nav: NavController,
              private dataEchangeProvider: DataExchangeProvider,
              private toastCtrl: ToastController) {

/*    this.vehicleFilter = {
      title: 'Filter',
      subTitle: 'Verkehrsmittel auswählen',
      mode: 'md'
    };*/

    this.vehicleSelection = {
      express: {
        type: 'ICE',
        name: 'ICE',
        active: false
      },
      regional: {
        type: "RE",
        name: "Regionalexpress",
        active: true
      },
      suburban: {
        type: "S",
        name: "S-Bahn",
        active: true
      },
      subway: {
        type: "U",
        name: "U-Bahn",
        active: true,
      },
      tram: {
        type: "TRAM",
        name: "Straßenbahn",
        active: true
      },
      bus: {
        type: "BUS",
        name: "Bus",
        active: true,
      },
      ferry: {
        type: "FERRY",
        name: "Fähre",
        active: false,
      }
    };

    this.connection = {
      start: {
        location: {
          type: "location",
        },
      },
      stopover: {
        id: null,
      },
      end: {
        location: {
          type: "location",
        },
      }
    };
    this.departureSelection = 'departure';
    this.minute_slider = 45;

    this.myTime = this.h24.toLocaleTimeString('de-DE');
  }

  /***
   * Start
   */

  searchStartHighlight() {
    this.startSelected = false;
  }

  searchStartInput(event) {
    this.startLoading = true;
    console.log(event._value);
    if (event._value.length > 2 && !this.startSelected) {
      this.StationFinderProvider.getVBBStation(event._value)
        .subscribe((value) => {
          console.log(value);
          this.stations = value;
          this.startLoading = false;
          this.startResults = true;
        }, err => {
          console.log(err);
        });
    } else {
      this.startResults = false;
    }
  }

  selectedStartStation(station: any) {
    this.startResults = false;
    this.startLoading = false;
    this.startSelected = true;
    this.connection.start.name = station.name;
    this.connection.start = station;
  }

  /***
   * Stopover
   */

  searchStopoverHighlight() {
    this.stopoverSelected = false;
  }

  searchStopoverInput(event) {
    console.log(event._value);
    if (event._value.length > 2 && !this.stopoverSelected) {
      this.StationFinderProvider.getVBBStation(event._value)
        .subscribe((value) => {
          console.log(value);
          this.stations = value;
          this.stopoverResults = true;
        }, err => {
          console.log(err);
        });
    } else {
      this.stopoverResults = false;
    }
  }

  selectedStopoverStation(station: any) {
    this.stopoverResults = false;
    this.stopoverSelected = true;
    this.connection.stopover.name = station.name;
    this.connection.stopover = station;
  }

  /***
   * End
   */

  searchEndHighlight() {
    this.endSelected = false;
  }

  searchEndInput(event) {
    if (event._value.length > 2 && !this.endSelected) {
      this.StationFinderProvider.getVBBStation(event._value)
        .subscribe((value) => {
          console.log(value);
          this.stations = value;
          this.endResults = true;
        }, err => {
          console.log(err);
        });
    } else {
      this.endResults = false;
    }
  }

  selectedEndStation(station: any) {
    this.endResults = false;
    this.endSelected = true;
    this.connection.end.name = station.name;
    this.connection.end = station;
  }

  setDeparture(event) {
    this.connection.minute_slider = event.value;
  }

  logSelectedTime(event) {
    console.log(event);
  }

  toggleStopover() {
    this.stopoverBool = !this.stopoverBool;
  }

  searchConnection() {
    this.searchingConnection = true;
    this.connection.suburban = this.vehicleSelection.suburban.active;
    this.connection.subway = this.vehicleSelection.subway.active;
    this.connection.tram = this.vehicleSelection.tram.active;
    this.connection.bus = this.vehicleSelection.bus.active;
    this.connection.ferry = this.vehicleSelection.ferry.active;
    this.connection.express = this.vehicleSelection.express.active;
    this.connection.regional = this.vehicleSelection.regional.active;

    let tempWhen: string;
    if(this.departureSelection === 'departure') {
      if (this.myDate) {
        tempWhen = `${this.myDate}T${this.myTime}`;
      } else {
        tempWhen = `${this.toDay.toISOString().substr(0, 10)}T${this.myTime}`;
      }
      this.connection.when = (Date.parse(tempWhen)/1000);
    } else if (this.departureSelection === 'departure-in') {
      tempWhen = `${this.toDay.toISOString().substr(0, 10)}T${this.myTime}`;
      this.connection.when = (Date.parse(tempWhen)/1000) + (this.minute_slider * 60);
    }

    if (this.connection.start.name && this.connection.end.name) {
      this.ConnectionFinderProvider.getVBBConnection(this.connection)
        .subscribe((value) => {
          console.log(value);
          this.searchingConnection = false;
          this.dataEchangeProvider.setConnectionSearchResults(value);
          this.nav.setRoot('SearchResultsPage');
        }, err => {
          this.searchingConnection = false;
          this.presentToast(err);
          console.log(err);
        });
    }
  }

  presentToast(err) {
    let toast = this.toastCtrl.create({
      message: err.error.msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
