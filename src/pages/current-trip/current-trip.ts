import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class CurrentTripPage {

  connection: any = {
    "type": "journey",
    "legs": [{
      "origin": {
        "type": "station",
        "id": "900000245025",
        "name": "Rangsdorf, Bhf",
        "location": {"type": "location", "latitude": 52.294126, "longitude": 13.431116},
        "products": {
          "suburban": true,
          "subway": true,
          "tram": true,
          "bus": true,
          "ferry": false,
          "express": false,
          "regional": true
        }
      },
      "destination": {
        "type": "station",
        "id": "900000058101",
        "name": "S Südkreuz",
        "location": {"type": "location", "latitude": 52.475465, "longitude": 13.365575},
        "products": {
          "suburban": true,
          "subway": false,
          "tram": false,
          "bus": true,
          "ferry": false,
          "express": true,
          "regional": true
        }
      },
      "departure": "2018-05-13T20:03:00.000+02:00",
      "arrival": "2018-05-13T20:32:00.000+02:00",
      "departureDelay": 60,
      "arrivalDelay": 60,
      "id": "1|1869|0|86|13052018",
      "line": {
        "type": "line",
        "id": "re5",
        "name": "RE5",
        "public": true,
        "class": 64,
        "productCode": 6,
        "operator": {"type": "operator", "id": "db-regio-ag", "name": "DB Regio AG"},
        "product": "regional",
        "mode": "train",
        "symbol": "RE",
        "nr": 5,
        "metro": false,
        "express": true,
        "night": false
      },
      "direction": "Rostock Hbf",
      "departurePlatform": "1",
      "arrivalPlatform": "6",
      "cycle": {"min": 3600, "max": 3600}
    }, {
      "origin": {
        "type": "station",
        "id": "900000058101",
        "name": "S Südkreuz",
        "location": {"type": "location", "latitude": 52.475465, "longitude": 13.365575},
        "products": {
          "suburban": true,
          "subway": false,
          "tram": false,
          "bus": true,
          "ferry": false,
          "express": true,
          "regional": true
        }
      },
      "destination": {
        "type": "station",
        "id": "900000058103",
        "name": "S+U Yorckstr. S2 S25 S26 U7",
        "location": {"type": "location", "latitude": 52.49232, "longitude": 13.372227},
        "products": {
          "suburban": true,
          "subway": false,
          "tram": false,
          "bus": true,
          "ferry": false,
          "express": false,
          "regional": false
        }
      },
      "departure": "2018-05-13T20:36:00.000+02:00",
      "arrival": "2018-05-13T20:39:00.000+02:00",
      "departureDelay": 0,
      "arrivalDelay": 0,
      "id": "1|33366|33|86|13052018",
      "line": {
        "type": "line",
        "id": "s2",
        "name": "S2",
        "public": true,
        "class": 1,
        "productCode": 0,
        "operator": {"type": "operator", "id": "s-bahn-berlin-gmbh", "name": "S-Bahn Berlin GmbH"},
        "product": "suburban",
        "mode": "train",
        "symbol": "S",
        "nr": 2,
        "metro": false,
        "express": false,
        "night": false
      },
      "direction": "S Buch",
      "departurePlatform": "2",
      "arrivalPlatform": "2",
      "cycle": {"min": 300, "max": 900},
      "alternatives": [{
        "line": {
          "type": "line",
          "id": "s25",
          "name": "S25",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 25,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T20:41:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T20:46:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T20:56:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s25",
          "name": "S25",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 25,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:01:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:06:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:16:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s25",
          "name": "S25",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 25,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:21:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:26:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:36:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s25",
          "name": "S25",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 25,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:41:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:46:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T21:56:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s25",
          "name": "S25",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 25,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T22:01:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s2",
          "name": "S2",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 2,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T22:06:00.000+02:00"
      }, {
        "line": {
          "type": "line",
          "id": "s25",
          "name": "S25",
          "public": true,
          "class": 1,
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 25,
          "metro": false,
          "express": false,
          "night": false
        }, "when": "2018-05-13T22:21:00.000+02:00"
      }]
    }, {
      "origin": {
        "type": "station",
        "id": "900000058103",
        "name": "S+U Yorckstr. S2 S25 S26 U7",
        "location": {"type": "location", "latitude": 52.49232, "longitude": 13.372227},
        "products": {
          "suburban": true,
          "subway": false,
          "tram": false,
          "bus": true,
          "ferry": false,
          "express": false,
          "regional": false
        }
      },
      "destination": {
        "type": "station",
        "id": "900000017101",
        "name": "U Mehringdamm",
        "location": {"type": "location", "latitude": 52.493579, "longitude": 13.388156},
        "products": {
          "suburban": true,
          "subway": true,
          "tram": false,
          "bus": true,
          "ferry": false,
          "express": false,
          "regional": false
        }
      },
      "departure": "2018-05-13T20:45:00.000+02:00",
      "arrival": "2018-05-13T20:48:00.000+02:00",
      "id": "1|19102|0|86|13052018",
      "line": {
        "type": "line",
        "id": "bus-m19",
        "name": "Bus M19",
        "public": true,
        "class": 8,
        "productCode": 3,
        "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
        "product": "bus",
        "mode": "bus",
        "symbol": "M",
        "nr": 19,
        "metro": true,
        "express": false,
        "night": false
      },
      "direction": "U Mehringdamm",
      "cycle": {"min": 600, "max": 600}
    }],
    "origin": {
      "type": "station",
      "id": "900000245025",
      "name": "Rangsdorf, Bhf",
      "location": {"type": "location", "latitude": 52.294126, "longitude": 13.431116},
      "products": {
        "suburban": true,
        "subway": true,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": true
      }
    },
    "destination": {
      "type": "station",
      "id": "900000017101",
      "name": "U Mehringdamm",
      "location": {"type": "location", "latitude": 52.493579, "longitude": 13.388156},
      "products": {
        "suburban": true,
        "subway": true,
        "tram": false,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "departure": "2018-05-13T20:03:00.000+02:00",
    "arrival": "2018-05-13T20:48:00.000+02:00"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentTripPage');
  }

}
