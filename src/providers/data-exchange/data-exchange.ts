import {Injectable} from '@angular/core';

/*
  Generated class for the DataExchangeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataExchangeProvider {

  searchResults: any;
  selectedConnection: any;
  departures: any;

  constructor() {
  }

  getDepartures(){
    console.log(this.departures);
    return this.departures;
  }

  setDepartures(departures: any){
    this.departures = departures;
  }

  setSelectedConnection(index: number) {
    this.selectedConnection = this.getConnectionSearchResults()[index];
  }

  getSelectedConnection() {
    return this.selectedConnection;
  }

  setConnectionSearchResults(connection) {
    this.searchResults = connection;
  }

  getConnectionSearchResults() {
    if (this.searchResults) {
      return this.searchResults;
    } else {
      return [
        {
          "type": "journey",
          "legs": [{
            "origin": {
              "type": "station",
              "id": "900000003204",
              "name": "Kleiner Tiergarten",
              "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "departure": "2018-05-23T20:01:00.000+02:00",
            "arrival": "2018-05-23T20:07:00.000+02:00",
            "id": "1|14275|0|86|23052018",
            "line": {
              "type": "line",
              "id": "bus-245",
              "name": "Bus 245",
              "public": true,
              "class": 8,
              "productCode": 3,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "bus",
              "mode": "bus",
              "symbol": null,
              "nr": 245,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S+U Hauptbahnhof",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003204",
                "name": "Kleiner Tiergarten",
                "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:01:00.000+02:00", "departure": "2018-05-23T20:01:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003202",
                "name": "Kirchstr./Alt-Moabit",
                "location": {"type": "location", "latitude": 52.524538, "longitude": 13.349583},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:02:00.000+02:00", "departure": "2018-05-23T20:02:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003256",
                "name": "Spenerstr.",
                "location": {"type": "location", "latitude": 52.523998, "longitude": 13.353539},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:03:00.000+02:00", "departure": "2018-05-23T20:03:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003203",
                "name": "Alt-Moabit/Rathenower Str.",
                "location": {"type": "location", "latitude": 52.523693, "longitude": 13.357072},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:04:00.000+02:00", "departure": "2018-05-23T20:04:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003257",
                "name": "Lesser-Ury-Weg",
                "location": {"type": "location", "latitude": 52.524214, "longitude": 13.36198},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:05:00.000+02:00", "departure": "2018-05-23T20:05:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000001204",
                "name": "Lehrter Str./Invalidenstr.",
                "location": {"type": "location", "latitude": 52.52576, "longitude": 13.365225},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:06:00.000+02:00", "departure": "2018-05-23T20:06:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:07:00.000+02:00", "departure": "2018-05-23T20:07:00.000+02:00"
            }],
            "cycle": {"min": 360, "max": 1200},
            "alternatives": [{
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T20:07:00.000+02:00"
            }, {
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T20:15:00.000+02:00"
            }, {
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T20:22:00.000+02:00"
            }, {
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T20:42:00.000+02:00"
            }, {
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T21:02:00.000+02:00"
            }, {
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T21:22:00.000+02:00"
            }, {
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T21:42:00.000+02:00"
            }, {
              "line": {
                "type": "line",
                "id": "bus-245",
                "name": "Bus 245",
                "public": true,
                "class": 8,
                "product": "bus",
                "mode": "bus",
                "symbol": null,
                "nr": 245,
                "metro": false,
                "express": false,
                "night": false
              }, "when": "2018-05-23T22:02:00.000+02:00"
            }]
          }, {
            "origin": {
              "type": "station",
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T20:14:00.000+02:00",
            "arrival": "2018-05-23T20:33:00.000+02:00",
            "departureDelay": 0,
            "arrivalDelay": 0,
            "id": "1|31606|25|86|23052018",
            "line": {
              "type": "line",
              "id": "s3",
              "name": "S3",
              "public": true,
              "class": 1,
              "productCode": 0,
              "operator": {"type": "operator", "id": "s-bahn-berlin-gmbh", "name": "S-Bahn Berlin GmbH"},
              "product": "suburban",
              "mode": "train",
              "symbol": "S",
              "nr": 3,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Erkner",
            "departurePlatform": "15",
            "arrivalPlatform": "2",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:13:00.000+02:00", "departure": "2018-05-23T20:14:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100001",
                "name": "S+U Friedrichstr.",
                "location": {"type": "location", "latitude": 52.520268, "longitude": 13.387149},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:16:00.000+02:00", "departure": "2018-05-23T20:16:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100002",
                "name": "S Hackescher Markt",
                "location": {"type": "location", "latitude": 52.522605, "longitude": 13.402359},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:18:00.000+02:00", "departure": "2018-05-23T20:18:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100003",
                "name": "S+U Alexanderplatz",
                "location": {"type": "location", "latitude": 52.521508, "longitude": 13.411267},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:20:00.000+02:00", "departure": "2018-05-23T20:20:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100004",
                "name": "S+U Jannowitzbrücke",
                "location": {"type": "location", "latitude": 52.515503, "longitude": 13.418027},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:22:00.000+02:00", "departure": "2018-05-23T20:22:00.000+02:00"
            }, {
              "station": {
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
              }, "arrival": "2018-05-23T20:24:00.000+02:00", "departure": "2018-05-23T20:27:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120004",
                "name": "S+U Warschauer Str.",
                "location": {"type": "location", "latitude": 52.505885, "longitude": 13.448717},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:29:00.000+02:00", "departure": "2018-05-23T20:29:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120003",
                "name": "S Ostkreuz",
                "location": {"type": "location", "latitude": 52.502847, "longitude": 13.469095},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:31:00.000+02:00", "departure": "2018-05-23T20:32:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:33:00.000+02:00", "departure": "2018-05-23T20:33:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160502",
              "name": "Gustav-Holzmann-Str.",
              "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": false,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T20:43:00.000+02:00",
            "arrival": "2018-05-23T20:46:00.000+02:00",
            "departureDelay": 0,
            "arrivalDelay": 0,
            "id": "1|25915|4|86|23052018",
            "line": {
              "type": "line",
              "id": "tram-21",
              "name": "Tram 21",
              "public": true,
              "class": 4,
              "productCode": 2,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "tram",
              "mode": "train",
              "symbol": null,
              "nr": 21,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Schöneweide",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:43:00.000+02:00", "departure": "2018-05-23T20:43:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160536",
                "name": "Kosanke-Siedlung",
                "location": {"type": "location", "latitude": 52.496707, "longitude": 13.485797},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:45:00.000+02:00", "departure": "2018-05-23T20:45:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160502",
                "name": "Gustav-Holzmann-Str.",
                "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:46:00.000+02:00", "departure": "2018-05-23T20:46:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1380}
          }],
          "origin": {
            "type": "station",
            "id": "900000003204",
            "name": "Kleiner Tiergarten",
            "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
            "id": "900000160502",
            "name": "Gustav-Holzmann-Str.",
            "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
            "products": {
              "suburban": true,
              "subway": true,
              "tram": true,
              "bus": false,
              "ferry": false,
              "express": false,
              "regional": false
            }
          },
          "departure": "2018-05-23T20:01:00.000+02:00",
          "arrival": "2018-05-23T20:46:00.000+02:00"
        }, {
          "type": "journey",
          "legs": [{
            "origin": {
              "type": "station",
              "id": "900000003204",
              "name": "Kleiner Tiergarten",
              "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "departure": "2018-05-23T20:22:00.000+02:00",
            "arrival": "2018-05-23T20:28:00.000+02:00",
            "departureDelay": 0,
            "arrivalDelay": 0,
            "id": "1|14278|0|86|23052018",
            "line": {
              "type": "line",
              "id": "bus-245",
              "name": "Bus 245",
              "public": true,
              "class": 8,
              "productCode": 3,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "bus",
              "mode": "bus",
              "symbol": null,
              "nr": 245,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S+U Hauptbahnhof",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003204",
                "name": "Kleiner Tiergarten",
                "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:22:00.000+02:00", "departure": "2018-05-23T20:22:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003202",
                "name": "Kirchstr./Alt-Moabit",
                "location": {"type": "location", "latitude": 52.524538, "longitude": 13.349583},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:23:00.000+02:00", "departure": "2018-05-23T20:23:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003256",
                "name": "Spenerstr.",
                "location": {"type": "location", "latitude": 52.523998, "longitude": 13.353539},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:24:00.000+02:00", "departure": "2018-05-23T20:24:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003203",
                "name": "Alt-Moabit/Rathenower Str.",
                "location": {"type": "location", "latitude": 52.523693, "longitude": 13.357072},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:25:00.000+02:00", "departure": "2018-05-23T20:25:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003257",
                "name": "Lesser-Ury-Weg",
                "location": {"type": "location", "latitude": 52.524214, "longitude": 13.36198},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:26:00.000+02:00", "departure": "2018-05-23T20:26:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000001204",
                "name": "Lehrter Str./Invalidenstr.",
                "location": {"type": "location", "latitude": 52.52576, "longitude": 13.365225},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:27:00.000+02:00", "departure": "2018-05-23T20:27:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:28:00.000+02:00", "departure": "2018-05-23T20:28:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T20:34:00.000+02:00",
            "arrival": "2018-05-23T20:53:00.000+02:00",
            "departureDelay": 0,
            "arrivalDelay": 0,
            "id": "1|31606|26|86|23052018",
            "line": {
              "type": "line",
              "id": "s3",
              "name": "S3",
              "public": true,
              "class": 1,
              "productCode": 0,
              "operator": {"type": "operator", "id": "s-bahn-berlin-gmbh", "name": "S-Bahn Berlin GmbH"},
              "product": "suburban",
              "mode": "train",
              "symbol": "S",
              "nr": 3,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Erkner",
            "departurePlatform": "15",
            "arrivalPlatform": "2",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:33:00.000+02:00", "departure": "2018-05-23T20:34:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100001",
                "name": "S+U Friedrichstr.",
                "location": {"type": "location", "latitude": 52.520268, "longitude": 13.387149},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:36:00.000+02:00", "departure": "2018-05-23T20:36:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100002",
                "name": "S Hackescher Markt",
                "location": {"type": "location", "latitude": 52.522605, "longitude": 13.402359},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:38:00.000+02:00", "departure": "2018-05-23T20:38:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100003",
                "name": "S+U Alexanderplatz",
                "location": {"type": "location", "latitude": 52.521508, "longitude": 13.411267},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:40:00.000+02:00", "departure": "2018-05-23T20:40:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100004",
                "name": "S+U Jannowitzbrücke",
                "location": {"type": "location", "latitude": 52.515503, "longitude": 13.418027},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:42:00.000+02:00", "departure": "2018-05-23T20:42:00.000+02:00"
            }, {
              "station": {
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
              }, "arrival": "2018-05-23T20:44:00.000+02:00", "departure": "2018-05-23T20:47:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120004",
                "name": "S+U Warschauer Str.",
                "location": {"type": "location", "latitude": 52.505885, "longitude": 13.448717},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:49:00.000+02:00", "departure": "2018-05-23T20:49:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120003",
                "name": "S Ostkreuz",
                "location": {"type": "location", "latitude": 52.502847, "longitude": 13.469095},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:51:00.000+02:00", "departure": "2018-05-23T20:52:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:53:00.000+02:00", "departure": "2018-05-23T20:53:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160502",
              "name": "Gustav-Holzmann-Str.",
              "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": false,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T21:03:00.000+02:00",
            "arrival": "2018-05-23T21:06:00.000+02:00",
            "id": "1|25915|5|86|23052018",
            "line": {
              "type": "line",
              "id": "tram-21",
              "name": "Tram 21",
              "public": true,
              "class": 4,
              "productCode": 2,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "tram",
              "mode": "train",
              "symbol": null,
              "nr": 21,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Schöneweide",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:03:00.000+02:00", "departure": "2018-05-23T21:03:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160536",
                "name": "Kosanke-Siedlung",
                "location": {"type": "location", "latitude": 52.496707, "longitude": 13.485797},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:05:00.000+02:00", "departure": "2018-05-23T21:05:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160502",
                "name": "Gustav-Holzmann-Str.",
                "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:06:00.000+02:00", "departure": "2018-05-23T21:06:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1380}
          }],
          "origin": {
            "type": "station",
            "id": "900000003204",
            "name": "Kleiner Tiergarten",
            "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
            "id": "900000160502",
            "name": "Gustav-Holzmann-Str.",
            "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
            "products": {
              "suburban": true,
              "subway": true,
              "tram": true,
              "bus": false,
              "ferry": false,
              "express": false,
              "regional": false
            }
          },
          "departure": "2018-05-23T20:22:00.000+02:00",
          "arrival": "2018-05-23T21:06:00.000+02:00"
        }, {
          "type": "journey",
          "legs": [{
            "origin": {
              "type": "station",
              "id": "900000003204",
              "name": "Kleiner Tiergarten",
              "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "departure": "2018-05-23T20:42:00.000+02:00",
            "arrival": "2018-05-23T20:48:00.000+02:00",
            "id": "1|14278|1|86|23052018",
            "line": {
              "type": "line",
              "id": "bus-245",
              "name": "Bus 245",
              "public": true,
              "class": 8,
              "productCode": 3,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "bus",
              "mode": "bus",
              "symbol": null,
              "nr": 245,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S+U Hauptbahnhof",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003204",
                "name": "Kleiner Tiergarten",
                "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:42:00.000+02:00", "departure": "2018-05-23T20:42:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003202",
                "name": "Kirchstr./Alt-Moabit",
                "location": {"type": "location", "latitude": 52.524538, "longitude": 13.349583},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:43:00.000+02:00", "departure": "2018-05-23T20:43:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003256",
                "name": "Spenerstr.",
                "location": {"type": "location", "latitude": 52.523998, "longitude": 13.353539},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:44:00.000+02:00", "departure": "2018-05-23T20:44:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003203",
                "name": "Alt-Moabit/Rathenower Str.",
                "location": {"type": "location", "latitude": 52.523693, "longitude": 13.357072},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:45:00.000+02:00", "departure": "2018-05-23T20:45:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003257",
                "name": "Lesser-Ury-Weg",
                "location": {"type": "location", "latitude": 52.524214, "longitude": 13.36198},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:46:00.000+02:00", "departure": "2018-05-23T20:46:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000001204",
                "name": "Lehrter Str./Invalidenstr.",
                "location": {"type": "location", "latitude": 52.52576, "longitude": 13.365225},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:47:00.000+02:00", "departure": "2018-05-23T20:47:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:48:00.000+02:00", "departure": "2018-05-23T20:48:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T20:54:00.000+02:00",
            "arrival": "2018-05-23T21:13:00.000+02:00",
            "departureDelay": 0,
            "arrivalDelay": 0,
            "id": "1|31606|27|86|23052018",
            "line": {
              "type": "line",
              "id": "s3",
              "name": "S3",
              "public": true,
              "class": 1,
              "productCode": 0,
              "operator": {"type": "operator", "id": "s-bahn-berlin-gmbh", "name": "S-Bahn Berlin GmbH"},
              "product": "suburban",
              "mode": "train",
              "symbol": "S",
              "nr": 3,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Erkner",
            "departurePlatform": "15",
            "arrivalPlatform": "2",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:53:00.000+02:00", "departure": "2018-05-23T20:54:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100001",
                "name": "S+U Friedrichstr.",
                "location": {"type": "location", "latitude": 52.520268, "longitude": 13.387149},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T20:56:00.000+02:00", "departure": "2018-05-23T20:56:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100002",
                "name": "S Hackescher Markt",
                "location": {"type": "location", "latitude": 52.522605, "longitude": 13.402359},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T20:58:00.000+02:00", "departure": "2018-05-23T20:58:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100003",
                "name": "S+U Alexanderplatz",
                "location": {"type": "location", "latitude": 52.521508, "longitude": 13.411267},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:00:00.000+02:00", "departure": "2018-05-23T21:00:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100004",
                "name": "S+U Jannowitzbrücke",
                "location": {"type": "location", "latitude": 52.515503, "longitude": 13.418027},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:02:00.000+02:00", "departure": "2018-05-23T21:02:00.000+02:00"
            }, {
              "station": {
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
              }, "arrival": "2018-05-23T21:04:00.000+02:00", "departure": "2018-05-23T21:07:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120004",
                "name": "S+U Warschauer Str.",
                "location": {"type": "location", "latitude": 52.505885, "longitude": 13.448717},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:09:00.000+02:00", "departure": "2018-05-23T21:09:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120003",
                "name": "S Ostkreuz",
                "location": {"type": "location", "latitude": 52.502847, "longitude": 13.469095},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:11:00.000+02:00", "departure": "2018-05-23T21:12:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:13:00.000+02:00", "departure": "2018-05-23T21:13:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160502",
              "name": "Gustav-Holzmann-Str.",
              "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": false,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T21:26:00.000+02:00",
            "arrival": "2018-05-23T21:29:00.000+02:00",
            "id": "1|25909|0|86|23052018",
            "line": {
              "type": "line",
              "id": "tram-21",
              "name": "Tram 21",
              "public": true,
              "class": 4,
              "productCode": 2,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "tram",
              "mode": "train",
              "symbol": null,
              "nr": 21,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Schöneweide",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:26:00.000+02:00", "departure": "2018-05-23T21:26:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160536",
                "name": "Kosanke-Siedlung",
                "location": {"type": "location", "latitude": 52.496707, "longitude": 13.485797},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:28:00.000+02:00", "departure": "2018-05-23T21:28:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160502",
                "name": "Gustav-Holzmann-Str.",
                "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:29:00.000+02:00", "departure": "2018-05-23T21:29:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }],
          "origin": {
            "type": "station",
            "id": "900000003204",
            "name": "Kleiner Tiergarten",
            "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
            "id": "900000160502",
            "name": "Gustav-Holzmann-Str.",
            "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
            "products": {
              "suburban": true,
              "subway": true,
              "tram": true,
              "bus": false,
              "ferry": false,
              "express": false,
              "regional": false
            }
          },
          "departure": "2018-05-23T20:42:00.000+02:00",
          "arrival": "2018-05-23T21:29:00.000+02:00"
        }, {
          "type": "journey",
          "legs": [{
            "origin": {
              "type": "station",
              "id": "900000003204",
              "name": "Kleiner Tiergarten",
              "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "departure": "2018-05-23T21:02:00.000+02:00",
            "arrival": "2018-05-23T21:08:00.000+02:00",
            "id": "1|14278|2|86|23052018",
            "line": {
              "type": "line",
              "id": "bus-245",
              "name": "Bus 245",
              "public": true,
              "class": 8,
              "productCode": 3,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "bus",
              "mode": "bus",
              "symbol": null,
              "nr": 245,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S+U Hauptbahnhof",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003204",
                "name": "Kleiner Tiergarten",
                "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:02:00.000+02:00", "departure": "2018-05-23T21:02:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003202",
                "name": "Kirchstr./Alt-Moabit",
                "location": {"type": "location", "latitude": 52.524538, "longitude": 13.349583},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:03:00.000+02:00", "departure": "2018-05-23T21:03:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003256",
                "name": "Spenerstr.",
                "location": {"type": "location", "latitude": 52.523998, "longitude": 13.353539},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:04:00.000+02:00", "departure": "2018-05-23T21:04:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003203",
                "name": "Alt-Moabit/Rathenower Str.",
                "location": {"type": "location", "latitude": 52.523693, "longitude": 13.357072},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:05:00.000+02:00", "departure": "2018-05-23T21:05:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003257",
                "name": "Lesser-Ury-Weg",
                "location": {"type": "location", "latitude": 52.524214, "longitude": 13.36198},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:06:00.000+02:00", "departure": "2018-05-23T21:06:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000001204",
                "name": "Lehrter Str./Invalidenstr.",
                "location": {"type": "location", "latitude": 52.52576, "longitude": 13.365225},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:07:00.000+02:00", "departure": "2018-05-23T21:07:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:08:00.000+02:00", "departure": "2018-05-23T21:08:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T21:14:00.000+02:00",
            "arrival": "2018-05-23T21:33:00.000+02:00",
            "departureDelay": 0,
            "arrivalDelay": 0,
            "id": "1|31606|28|86|23052018",
            "line": {
              "type": "line",
              "id": "s3",
              "name": "S3",
              "public": true,
              "class": 1,
              "productCode": 0,
              "operator": {"type": "operator", "id": "s-bahn-berlin-gmbh", "name": "S-Bahn Berlin GmbH"},
              "product": "suburban",
              "mode": "train",
              "symbol": "S",
              "nr": 3,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Erkner",
            "departurePlatform": "15",
            "arrivalPlatform": "2",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:13:00.000+02:00", "departure": "2018-05-23T21:14:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100001",
                "name": "S+U Friedrichstr.",
                "location": {"type": "location", "latitude": 52.520268, "longitude": 13.387149},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:16:00.000+02:00", "departure": "2018-05-23T21:16:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100002",
                "name": "S Hackescher Markt",
                "location": {"type": "location", "latitude": 52.522605, "longitude": 13.402359},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:18:00.000+02:00", "departure": "2018-05-23T21:18:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100003",
                "name": "S+U Alexanderplatz",
                "location": {"type": "location", "latitude": 52.521508, "longitude": 13.411267},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:20:00.000+02:00", "departure": "2018-05-23T21:20:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100004",
                "name": "S+U Jannowitzbrücke",
                "location": {"type": "location", "latitude": 52.515503, "longitude": 13.418027},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:22:00.000+02:00", "departure": "2018-05-23T21:22:00.000+02:00"
            }, {
              "station": {
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
              }, "arrival": "2018-05-23T21:24:00.000+02:00", "departure": "2018-05-23T21:27:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120004",
                "name": "S+U Warschauer Str.",
                "location": {"type": "location", "latitude": 52.505885, "longitude": 13.448717},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:29:00.000+02:00", "departure": "2018-05-23T21:29:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120003",
                "name": "S Ostkreuz",
                "location": {"type": "location", "latitude": 52.502847, "longitude": 13.469095},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:31:00.000+02:00", "departure": "2018-05-23T21:32:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:33:00.000+02:00", "departure": "2018-05-23T21:33:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160502",
              "name": "Gustav-Holzmann-Str.",
              "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": false,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T21:46:00.000+02:00",
            "arrival": "2018-05-23T21:49:00.000+02:00",
            "id": "1|25909|1|86|23052018",
            "line": {
              "type": "line",
              "id": "tram-21",
              "name": "Tram 21",
              "public": true,
              "class": 4,
              "productCode": 2,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "tram",
              "mode": "train",
              "symbol": null,
              "nr": 21,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Schöneweide",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:46:00.000+02:00", "departure": "2018-05-23T21:46:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160536",
                "name": "Kosanke-Siedlung",
                "location": {"type": "location", "latitude": 52.496707, "longitude": 13.485797},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:48:00.000+02:00", "departure": "2018-05-23T21:48:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160502",
                "name": "Gustav-Holzmann-Str.",
                "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:49:00.000+02:00", "departure": "2018-05-23T21:49:00.000+02:00"
            }]
          }],
          "origin": {
            "type": "station",
            "id": "900000003204",
            "name": "Kleiner Tiergarten",
            "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
            "id": "900000160502",
            "name": "Gustav-Holzmann-Str.",
            "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
            "products": {
              "suburban": true,
              "subway": true,
              "tram": true,
              "bus": false,
              "ferry": false,
              "express": false,
              "regional": false
            }
          },
          "departure": "2018-05-23T21:02:00.000+02:00",
          "arrival": "2018-05-23T21:49:00.000+02:00"
        }, {
          "type": "journey",
          "legs": [{
            "origin": {
              "type": "station",
              "id": "900000003204",
              "name": "Kleiner Tiergarten",
              "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "departure": "2018-05-23T21:22:00.000+02:00",
            "arrival": "2018-05-23T21:28:00.000+02:00",
            "id": "1|14278|3|86|23052018",
            "line": {
              "type": "line",
              "id": "bus-245",
              "name": "Bus 245",
              "public": true,
              "class": 8,
              "productCode": 3,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "bus",
              "mode": "bus",
              "symbol": null,
              "nr": 245,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S+U Hauptbahnhof",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003204",
                "name": "Kleiner Tiergarten",
                "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:22:00.000+02:00", "departure": "2018-05-23T21:22:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003202",
                "name": "Kirchstr./Alt-Moabit",
                "location": {"type": "location", "latitude": 52.524538, "longitude": 13.349583},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:23:00.000+02:00", "departure": "2018-05-23T21:23:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003256",
                "name": "Spenerstr.",
                "location": {"type": "location", "latitude": 52.523998, "longitude": 13.353539},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:24:00.000+02:00", "departure": "2018-05-23T21:24:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003203",
                "name": "Alt-Moabit/Rathenower Str.",
                "location": {"type": "location", "latitude": 52.523693, "longitude": 13.357072},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:25:00.000+02:00", "departure": "2018-05-23T21:25:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003257",
                "name": "Lesser-Ury-Weg",
                "location": {"type": "location", "latitude": 52.524214, "longitude": 13.36198},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:26:00.000+02:00", "departure": "2018-05-23T21:26:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000001204",
                "name": "Lehrter Str./Invalidenstr.",
                "location": {"type": "location", "latitude": 52.52576, "longitude": 13.365225},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:27:00.000+02:00", "departure": "2018-05-23T21:27:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:28:00.000+02:00", "departure": "2018-05-23T21:28:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000003201",
              "name": "S+U Berlin Hauptbahnhof",
              "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": true,
                "regional": true
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T21:34:00.000+02:00",
            "arrival": "2018-05-23T21:53:00.000+02:00",
            "departureDelay": 0,
            "arrivalDelay": 0,
            "id": "1|31608|0|86|23052018",
            "line": {
              "type": "line",
              "id": "s3",
              "name": "S3",
              "public": true,
              "class": 1,
              "productCode": 0,
              "operator": {"type": "operator", "id": "s-bahn-berlin-gmbh", "name": "S-Bahn Berlin GmbH"},
              "product": "suburban",
              "mode": "train",
              "symbol": "S",
              "nr": 3,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Erkner",
            "departurePlatform": "15",
            "arrivalPlatform": "2",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000003201",
                "name": "S+U Berlin Hauptbahnhof",
                "location": {"type": "location", "latitude": 52.52585, "longitude": 13.368928},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:33:00.000+02:00", "departure": "2018-05-23T21:34:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100001",
                "name": "S+U Friedrichstr.",
                "location": {"type": "location", "latitude": 52.520268, "longitude": 13.387149},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:36:00.000+02:00", "departure": "2018-05-23T21:36:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100002",
                "name": "S Hackescher Markt",
                "location": {"type": "location", "latitude": 52.522605, "longitude": 13.402359},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:38:00.000+02:00", "departure": "2018-05-23T21:38:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100003",
                "name": "S+U Alexanderplatz",
                "location": {"type": "location", "latitude": 52.521508, "longitude": 13.411267},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:40:00.000+02:00", "departure": "2018-05-23T21:40:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000100004",
                "name": "S+U Jannowitzbrücke",
                "location": {"type": "location", "latitude": 52.515503, "longitude": 13.418027},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:42:00.000+02:00", "departure": "2018-05-23T21:42:00.000+02:00"
            }, {
              "station": {
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
              }, "arrival": "2018-05-23T21:44:00.000+02:00", "departure": "2018-05-23T21:47:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120004",
                "name": "S+U Warschauer Str.",
                "location": {"type": "location", "latitude": 52.505885, "longitude": 13.448717},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:49:00.000+02:00", "departure": "2018-05-23T21:49:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000120003",
                "name": "S Ostkreuz",
                "location": {"type": "location", "latitude": 52.502847, "longitude": 13.469095},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": false,
                  "bus": true,
                  "ferry": false,
                  "express": true,
                  "regional": true
                }
              }, "arrival": "2018-05-23T21:51:00.000+02:00", "departure": "2018-05-23T21:52:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T21:53:00.000+02:00", "departure": "2018-05-23T21:53:00.000+02:00"
            }],
            "cycle": {"min": 1200, "max": 1200}
          }, {
            "origin": {
              "type": "station",
              "id": "900000160001",
              "name": "S Rummelsburg",
              "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
              "products": {
                "suburban": true,
                "subway": false,
                "tram": true,
                "bus": true,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "destination": {
              "type": "station",
              "id": "900000160502",
              "name": "Gustav-Holzmann-Str.",
              "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
              "products": {
                "suburban": true,
                "subway": true,
                "tram": true,
                "bus": false,
                "ferry": false,
                "express": false,
                "regional": false
              }
            },
            "departure": "2018-05-23T22:06:00.000+02:00",
            "arrival": "2018-05-23T22:09:00.000+02:00",
            "id": "1|25909|2|86|23052018",
            "line": {
              "type": "line",
              "id": "tram-21",
              "name": "Tram 21",
              "public": true,
              "class": 4,
              "productCode": 2,
              "operator": {"type": "operator", "id": "berliner-verkehrsbetriebe", "name": "Berliner Verkehrsbetriebe"},
              "product": "tram",
              "mode": "train",
              "symbol": null,
              "nr": 21,
              "metro": false,
              "express": false,
              "night": false
            },
            "direction": "S Schöneweide",
            "passed": [{
              "station": {
                "type": "station",
                "id": "900000160001",
                "name": "S Rummelsburg",
                "location": {"type": "location", "latitude": 52.501211, "longitude": 13.478696},
                "products": {
                  "suburban": true,
                  "subway": false,
                  "tram": true,
                  "bus": true,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T22:06:00.000+02:00", "departure": "2018-05-23T22:06:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160536",
                "name": "Kosanke-Siedlung",
                "location": {"type": "location", "latitude": 52.496707, "longitude": 13.485797},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T22:08:00.000+02:00", "departure": "2018-05-23T22:08:00.000+02:00"
            }, {
              "station": {
                "type": "station",
                "id": "900000160502",
                "name": "Gustav-Holzmann-Str.",
                "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
                "products": {
                  "suburban": true,
                  "subway": true,
                  "tram": true,
                  "bus": false,
                  "ferry": false,
                  "express": false,
                  "regional": false
                }
              }, "arrival": "2018-05-23T22:09:00.000+02:00", "departure": "2018-05-23T22:09:00.000+02:00"
            }]
          }],
          "origin": {
            "type": "station",
            "id": "900000003204",
            "name": "Kleiner Tiergarten",
            "location": {"type": "location", "latitude": 52.524987, "longitude": 13.345763},
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
            "id": "900000160502",
            "name": "Gustav-Holzmann-Str.",
            "location": {"type": "location", "latitude": 52.493129, "longitude": 13.490651},
            "products": {
              "suburban": true,
              "subway": true,
              "tram": true,
              "bus": false,
              "ferry": false,
              "express": false,
              "regional": false
            }
          },
          "departure": "2018-05-23T21:22:00.000+02:00",
          "arrival": "2018-05-23T22:09:00.000+02:00"
        }]
    }
  }
}
