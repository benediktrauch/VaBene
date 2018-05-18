import {Component} from '@angular/core';
import {ConnectionFinderProvider} from "../../providers/connection-finder/connection-finder";
import {StationFinderProvider} from "../../providers/station-finder/station-finder";
import {NavController} from "ionic-angular";
import {SearchResultsPage} from "../../pages/search-results/search-results";
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";

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
  minute_slider: number,
}


@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  connection: any;

  stopoverBool: boolean = true;

  vehicleSelection: any[];
  vehicleFilter: {};

  startResults: boolean = false;
  stopoverResults: boolean = false;
  endResults: boolean = false;
  startSelected: boolean = false;
  stopoverSelected: boolean = false;
  endSelected: boolean = false;
  stations: any;

  h24: Date = now;

  searchingConnection: boolean = false;



  constructor(public StationFinderProvider: StationFinderProvider,
              public ConnectionFinderProvider: ConnectionFinderProvider,
              public nav: NavController,
              private dataEchangeProvider: DataExchangeProvider) {

    this.connection = {
      start: {
        location: {
          type: "location",
        },
      },
      stopover: {
        id: '',
        location: {
          type: "location",
          latitude: 0,
          longitude: 0
        },
        name: '',
        relevance: 0,
        score: 0,
        type: '',
        weight: 0
      },
      end: {
        location: {
          type: "location",
        },
      },
      departureSelection: 'departure',
      minute_slider: 45,
    };
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
    }, {
      type: "SB",
      name: "S-Bahn"
    }, {
      type: "UB",
      name: "U-Bahn"
    }, {
      type: "TRAM",
      name: "Straßenbahn"
    }, {
      type: "BUS",
      name: "Bus"
    }];

    this.connection.myTime = this.h24.toLocaleTimeString('de-DE');
  }

  /***
   * Start
   */

  searchStartHighlight() {
    this.startSelected = false;
  }

  searchStartInput(event) {
    console.log(event._value);
    if (event._value.length > 2 && !this.startSelected) {
      this.StationFinderProvider.getVBBStation(event._value)
        .then((value) => {
          this.stations = value
          this.startResults = true;
        });
    }
  }

  selectedStartStation(station: any) {
    this.startResults = false;
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
        .then((value) => {
          this.stations = value;
          this.stopoverResults = true;
        });
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
        .then((value) => {
          this.stations = value;
          this.endResults = true;
        });
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

    console.log(this.connection);

    if(this.connection.start.name && this.connection.end.name){
      this.ConnectionFinderProvider.getVBBConnection(this.connection)
        .subscribe((value) => {
          this.searchingConnection = false;
          this.dataEchangeProvider.setConnectionSearchResults(value);
          this.nav.setRoot('SearchResultsPage');
        });
    }
  }
}
