import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

  searchResults: any[] = [
    {
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
    },
    {
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
          "id": "900000245027",
          "name": "S Blankenfelde (TF)",
          "location": {"type": "location", "latitude": 52.337625, "longitude": 13.415906},
          "products": {
            "suburban": true,
            "subway": false,
            "tram": false,
            "bus": true,
            "ferry": false,
            "express": false,
            "regional": true
          }
        },
        "departure": "2018-05-13T19:24:00.000+02:00",
        "arrival": "2018-05-13T19:30:00.000+02:00",
        "id": "1|940|0|86|13052018",
        "line": {
          "type": "line",
          "id": "re7",
          "name": "RE7",
          "public": true,
          "class": 64,
          "productCode": 6,
          "operator": {"type": "operator", "id": "db-regio-ag", "name": "DB Regio AG"},
          "product": "regional",
          "mode": "train",
          "symbol": "RE",
          "nr": 7,
          "metro": false,
          "express": true,
          "night": false
        },
        "direction": "Bad Belzig, Bhf",
        "departurePlatform": "1",
        "cycle": {"min": 1320, "max": 2280},
        "alternatives": [{
          "line": {
            "type": "line",
            "id": "re5",
            "name": "RE5",
            "public": true,
            "class": 64,
            "product": "regional",
            "mode": "train",
            "symbol": "RE",
            "nr": 5,
            "metro": false,
            "express": true,
            "night": false
          }, "when": "2018-05-13T20:02:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "re7",
            "name": "RE7",
            "public": true,
            "class": 64,
            "product": "regional",
            "mode": "train",
            "symbol": "RE",
            "nr": 7,
            "metro": false,
            "express": true,
            "night": false
          }, "when": "2018-05-13T20:24:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "re5",
            "name": "RE5",
            "public": true,
            "class": 64,
            "product": "regional",
            "mode": "train",
            "symbol": "RE",
            "nr": 5,
            "metro": false,
            "express": true,
            "night": false
          }, "when": "2018-05-13T21:02:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "re7",
            "name": "RE7",
            "public": true,
            "class": 64,
            "product": "regional",
            "mode": "train",
            "symbol": "RE",
            "nr": 7,
            "metro": false,
            "express": true,
            "night": false
          }, "when": "2018-05-13T21:24:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "re5",
            "name": "RE5",
            "public": true,
            "class": 64,
            "product": "regional",
            "mode": "train",
            "symbol": "RE",
            "nr": 5,
            "metro": false,
            "express": true,
            "night": false
          }, "when": "2018-05-13T22:02:00.000+02:00"
        }]
      }, {
        "origin": {
          "type": "station",
          "id": "900000245027",
          "name": "S Blankenfelde (TF)",
          "location": {"type": "location", "latitude": 52.337625, "longitude": 13.415906},
          "products": {
            "suburban": true,
            "subway": false,
            "tram": false,
            "bus": true,
            "ferry": false,
            "express": false,
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
        "departure": "2018-05-13T19:45:00.000+02:00",
        "arrival": "2018-05-13T20:10:00.000+02:00",
        "departureDelay": 60,
        "arrivalDelay": 60,
        "id": "1|33154|3|86|13052018",
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
        "departurePlatform": "3",
        "arrivalPlatform": "2",
        "cycle": {"min": 1200, "max": 1200}
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
        "departure": "2018-05-13T20:16:00.000+02:00",
        "arrival": "2018-05-13T20:20:00.000+02:00",
        "id": "1|19078|30|86|13052018",
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
        "cycle": {"min": 540, "max": 600}
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
      "departure": "2018-05-13T19:24:00.000+02:00",
      "arrival": "2018-05-13T20:20:00.000+02:00"
    },
    {
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
          "id": "900000120005",
          "name": "S Ostbahnhof",
          "location": {"type": "location", "latitude": 52.510002, "longitude": 13.435745},
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
        "departure": "2018-05-13T19:24:00.000+02:00",
        "arrival": "2018-05-13T20:01:00.000+02:00",
        "id": "1|940|0|86|13052018",
        "line": {
          "type": "line",
          "id": "re7",
          "name": "ICE 1032",
          "public": true,
          "class": 64,
          "productCode": 6,
          "operator": {"type": "operator", "id": "db-regio-ag", "name": "DB Regio AG"},
          "product": "express",
          "mode": "train",
          "symbol": "ICE",
          "nr": 7,
          "metro": false,
          "express": true,
          "night": false
        },
        "direction": "Bad Belzig, Bhf",
        "departurePlatform": "1",
        "arrivalPlatform": "7"
      }, {
        "origin": {
          "type": "station",
          "id": "900000120005",
          "name": "S Ostbahnhof",
          "location": {"type": "location", "latitude": 52.510002, "longitude": 13.435745},
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
        "departure": "2018-05-13T20:08:00.000+02:00",
        "arrival": "2018-05-13T20:27:00.000+02:00",
        "id": "1|9331|0|86|13052018",
        "line": {
          "type": "line",
          "id": "bus-140",
          "name": "Bus 140",
          "public": true,
          "class": 8,
          "productCode": 3,
          "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
          "product": "bus",
          "mode": "bus",
          "symbol": null,
          "nr": 140,
          "metro": false,
          "express": false,
          "night": false
        },
        "direction": "S+U Tempelhof",
        "cycle": {"min": 1200, "max": 1200}
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
      "departure": "2018-05-13T19:24:00.000+02:00",
      "arrival": "2018-05-13T20:27:00.000+02:00"
    },
    {
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
    },
    {
      "type": "journey",
      "legs": [
        {
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
          "id": "900000100020",
          "name": "S+U Potsdamer Platz",
          "location": {"type": "location", "latitude": 52.509337, "longitude": 13.376452},
          "products": {
            "suburban": true,
            "subway": false,
            "tram": false,
            "bus": true,
            "ferry": false,
            "express": false,
            "regional": true
          }
        },
        "departure": "2018-05-13T20:03:00.000+02:00",
        "arrival": "2018-05-13T20:37:00.000+02:00",
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
        "arrivalPlatform": "3",
        "cycle": {"min": 3600, "max": 3600}
      },
        {
        "origin": {
          "type": "station",
          "id": "900000100020",
          "name": "S+U Potsdamer Platz",
          "location": {"type": "location", "latitude": 52.509337, "longitude": 13.376452},
          "products": {
            "suburban": true,
            "subway": false,
            "tram": false,
            "bus": true,
            "ferry": false,
            "express": false,
            "regional": true
          }
        },
        "destination": {
          "type": "station",
          "id": "900000100721",
          "name": "S+U Potsdamer Platz [Bus Leipziger Str.]",
          "location": {"type": "location", "latitude": 52.509606, "longitude": 13.378286},
          "products": {
            "suburban": true,
            "subway": true,
            "tram": true,
            "bus": true,
            "ferry": false,
            "express": false,
            "regional": false
          }
        },
        "departure": "2018-05-13T20:37:00.000+02:00",
        "arrival": "2018-05-13T20:41:00.000+02:00",
        "mode": "walking",
        "public": true
      },
        {
        "origin": {
          "type": "station",
          "id": "900000100721",
          "name": "S+U Potsdamer Platz [Bus Leipziger Str.]",
          "location": {"type": "location", "latitude": 52.509606, "longitude": 13.378286},
          "products": {
            "suburban": true,
            "subway": true,
            "tram": true,
            "bus": true,
            "ferry": false,
            "express": false,
            "regional": false
          }
        },
        "destination": {
          "type": "station",
          "id": "900000100528",
          "name": "U Stadtmitte/Leipziger Str.",
          "location": {"type": "location", "latitude": 52.510326, "longitude": 13.389918},
          "products": {
            "suburban": true,
            "subway": true,
            "tram": true,
            "bus": true,
            "ferry": false,
            "express": false,
            "regional": false
          }
        },
        "departure": "2018-05-13T20:41:00.000+02:00",
        "arrival": "2018-05-13T20:43:00.000+02:00",
        "id": "1|22081|1|86|13052018",
        "line": {
          "type": "line",
          "id": "bus-m48",
          "name": "Bus M48",
          "public": true,
          "class": 8,
          "productCode": 3,
          "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
          "product": "bus",
          "mode": "bus",
          "symbol": "M",
          "nr": 48,
          "metro": true,
          "express": false,
          "night": false
        },
        "direction": "S+U Alexanderplatz",
        "cycle": {"min": 600, "max": 1200},
        "alternatives": [{
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T20:51:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T21:01:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T21:11:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T21:21:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T21:31:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T21:51:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T22:11:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T22:31:00.000+02:00"
        }, {
          "line": {
            "type": "line",
            "id": "bus-m48",
            "name": "Bus M48",
            "public": true,
            "class": 8,
            "product": "bus",
            "mode": "bus",
            "symbol": "M",
            "nr": 48,
            "metro": true,
            "express": false,
            "night": false
          }, "when": "2018-05-13T22:51:00.000+02:00"
        }]
      },
        {
        "origin": {
          "type": "station",
          "id": "900000100528",
          "name": "U Stadtmitte/Leipziger Str.",
          "location": {"type": "location", "latitude": 52.510326, "longitude": 13.389918},
          "products": {
            "suburban": true,
            "subway": true,
            "tram": true,
            "bus": true,
            "ferry": false,
            "express": false,
            "regional": false
          }
        },
        "destination": {
          "type": "station",
          "id": "900000100011",
          "name": "U Stadtmitte",
          "location": {"type": "location", "latitude": 52.511494, "longitude": 13.38972},
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
        "departure": "2018-05-13T20:43:00.000+02:00",
        "arrival": "2018-05-13T20:46:00.000+02:00",
        "mode": "walking",
        "public": true
      },
        {
        "origin": {
          "type": "station",
          "id": "900000100011",
          "name": "U Stadtmitte",
          "location": {"type": "location", "latitude": 52.511494, "longitude": 13.38972},
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
        "departure": "2018-05-13T20:46:00.000+02:00",
        "arrival": "2018-05-13T20:50:00.000+02:00",
        "id": "1|31230|1|86|13052018",
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
        "direction": "U Alt-Mariendorf",
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
      "arrival": "2018-05-13T20:50:00.000+02:00"
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ConnectionDetailPage = "ConnectionDetailPage";
    this.params = {id: 42};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }
}
