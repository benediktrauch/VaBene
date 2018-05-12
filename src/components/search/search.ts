import {Component} from '@angular/core';
import {ConnectionFinderProvider} from "../../providers/connection-finder/connection-finder";
import {StationFinderProvider} from "../../providers/station-finder/station-finder";

let now = new Date();

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  connection: any = {};

  stopover: boolean = true;

  vehicleSelection: any[];
  vehicleFilter: {};

  h24: Date = now;

  constructor(public StationFinderProvider: StationFinderProvider, public ConnectionFinderProvider: ConnectionFinderProvider) {
    this.connection.departureSelection = 'departure';
    this.connection.minute_slider = 45;
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

  setDeparture(event) {
    this.connection.minute_slider = event.value;
  }

  logSelectedTime(event) {
    console.log(event);
  }

  toggleStopover() {
    this.stopover = !this.stopover;
  }

  searchConnection() {
    console.log("Search");
    console.log(this.connection);
    this.ConnectionFinderProvider.test();

/*    this.ConnectionFinderProvider.getConnection().then((evt) => {
        console.log(evt);
      }
    );*/

  }
}
