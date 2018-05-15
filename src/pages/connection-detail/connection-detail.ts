import {Component, ViewChild} from '@angular/core';
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
  connection: Object;

  myLocation = {
    long: 13.377704,
    lat: 52.516275
  };

  myMap = {
    zoom: 5
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
/*
    this.connection = this.navParams.data;
*/
    this.connection = {
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
        "departure": "2018-05-13T19:02:00.000+02:00",
        "arrival": "2018-05-13T19:33:00.000+02:00",
        "id": "1|1907|0|86|13052018",
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
        "direction": "Stralsund, Hbf",
        "departurePlatform": "1",
        "arrivalPlatform": "6",
        "cycle": {"min": 3600, "max": 3600}
      },
        {
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
          "id": "900000068201",
          "name": "S+U Tempelhof",
          "location": {"type": "location", "latitude": 52.470692, "longitude": 13.385756},
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
        "departure": "2018-05-13T19:40:00.000+02:00",
        "arrival": "2018-05-13T19:42:00.000+02:00",
        "departureDelay": 0,
        "arrivalDelay": 0,
        "id": "1|58553|4|86|13052018",
        "line": {
          "type": "line",
          "id": "s42",
          "name": "S42",
          "public": true,
          "class": 1,
          "productCode": 0,
          "operator": {"type": "operator", "id": "s-bahn-berlin-gmbh", "name": "S-Bahn Berlin GmbH"},
          "product": "suburban",
          "mode": "train",
          "symbol": "S",
          "nr": 42,
          "metro": false,
          "express": false,
          "night": false
        },
        "direction": "Ringbahn S 42",
        "departurePlatform": "12",
        "arrivalPlatform": "2",
        "cycle": {"min": 120, "max": 480},
        "alternatives": [{
          "line": {
            "type": "line",
            "id": "s45",
            "name": "S45",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 45,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T19:48:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s42",
            "name": "S42",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 42,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T19:50:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s46",
            "name": "S46",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 46,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T19:53:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s42",
            "name": "S42",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 42,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:00:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s45",
            "name": "S45",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 45,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:08:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s42",
            "name": "S42",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 42,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:10:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s46",
            "name": "S46",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 46,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:13:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s42",
            "name": "S42",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 42,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:20:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s45",
            "name": "S45",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 45,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:28:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s42",
            "name": "S42",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 42,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:30:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s46",
            "name": "S46",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 46,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:33:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s42",
            "name": "S42",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 42,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:40:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s45",
            "name": "S45",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 45,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:48:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s42",
            "name": "S42",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 42,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:50:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "s46",
            "name": "S46",
            "public": true,
            "class": 1,
            "product": "suburban",
            "mode": "train",
            "symbol": "S",
            "nr": 46,
            "metro": false,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:53:00.000+02:00"
        }]
      }, {
        "origin": {
          "type": "station",
          "id": "900000068201",
          "name": "S+U Tempelhof",
          "location": {"type": "location", "latitude": 52.470692, "longitude": 13.385756},
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
        "destination": {
          "type": "station",
          "id": "900000017101",
          "name": "U Mehringdamm",
          "location": {
            "type": "location",
            "latitude": 52.493579,
            "longitude": 13.388156
          },
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
        "departure": "2018-05-13T19:53:00.000+02:00",
        "arrival": "2018-05-13T19:58:00.000+02:00",
        "id": "1|31364|9|86|13052018",
        "line": {
          "type": "line",
          "id": "u6",
          "name": "U6",
          "public": true,
          "class": 2,
          "productCode": 1,
          "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
          "product": "subway",
          "mode": "train",
          "symbol": "U",
          "nr": 6,
          "metro": false,
          "express": false,
          "night": false
        },
        "direction": "U Alt-Tegel",
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
      "departure": "2018-05-13T19:02:00.000+02:00",
      "arrival": "2018-05-13T19:58:00.000+02:00"
    };
      console.log(this.connection);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionDetailPage');
    console.log(this.connection);
  }
}
