import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as googleMapsClient from '@google/maps';

@Injectable()
export class ConnectionFinderProvider {

  gmClient = googleMapsClient.createClient({
    key: 'AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU',
    Promise: Promise
  });

  apiUrl: string;
  authHeader: any;
  origin: string;
  stops: string; // &waypoints=via:-37.81223%2C144.96254%7Cvia:-34.92788%2C138.60008
  destination: string;
  mode: string = "mode=transit";
  alternatives: string = "alternatives=true";
  arrival_time: string; //&arrival_time=1343641500
  departure_time: string; //&departure_time=1343641500
  transit_routing_preference: string = "transit_routing_preference=fewer_transfers";
  transit_mode: string = "transit_mode=train|tram|subway|bus|";
  API_KEY: string = "key=AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU";

  // https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=YOUR_API_KEY



  constructor(public http: HttpClient) {
    console.log('Hello ConnectionFinderProvider Provider');

    this.apiUrl = 'https://maps.googleapis.com/maps/api/directions/json?';
    this.origin = "origin=51.5276949%2C6.9267585";
    this.destination = "destination=50.1109220%2C8.6821270";
    //latitude: 51.5276949, longitude: 6.9267585


  }

    /*origin: LatLng | String | google.maps.Place,
      destination: LatLng | String | google.maps.Place,
      travelMode: TravelMode,
      transitOptions: TransitOptions,
      drivingOptions: DrivingOptions,
      unitSystem: UnitSystem,
      waypoints[]: DirectionsWaypoint,
      optimizeWaypoints: Boolean,
      provideRouteAlternatives: Boolean,
      avoidHighways: Boolean,
      avoidTolls: Boolean,
      region: String*/

    /*{
      origin: 'Chicago, IL',
        destination: 'Los Angeles, CA',
      waypoints: [
      {
        location: 'Joplin, MO',
        stopover: false
      },{
        location: 'Oklahoma City, OK',
        stopover: true
      }],
      provideRouteAlternatives: false,
      travelMode: 'DRIVING',
      drivingOptions: {
      departureTime: new Date(/!* now, or future date *!/),
        trafficModel: 'pessimistic'
    },
      unitSystem: google.maps.UnitSystem.IMPERIAL
    }*/

      //origin: '51.5276949, 6.9267585',
      //destination: '50.1109220, 8.6821270',
      //travelMode: 'TRANSIT'

  test() {
    this.gmClient.geocode({
      address: '1600 Amphitheatre Parkway, Mountain View, CA'
    })
      .asPromise()
      .then((response) => {
        console.log(response.json.results);
      })
      .catch((err) => {
        console.log(err);
      });

    this.gmClient.placesNearby({
      location: '51.5276949, 6.9267585'
    }, function(err, response) {
      console.log("nearby");
      if (!err) {
        console.log(response.json.results);
      }
    });

    this.gmClient.directions({
      origin: 'Town Hall, Sydney, NSW',
      destination: 'Parramatta, NSW',
      mode: 'transit',
      alternatives: true,
      transit_mode: ['bus', 'rail'],
      transit_routing_preference: 'fewer_transfers',
    })
      .asPromise()
      .then((response) => {
        console.log(response.json.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getVVBConnection(connection: any) {
    console.log("VBB Connection");
    //this.apiUrl = this.apiUrl +this.origin + "&" + this.destination + "&" + this.mode + "&" + this.API_KEY;

    if(connection.stopover.id){
      this.apiUrl = `https://2.vbb.transport.rest/journeys?from=${connection.start.id}&to=${connection.end.id}&via=${connection.stopover.id}&when=${connection.when}&passedStations=true&transfers=5&transferTime=${connection.transferTime}&accessibility=${connection.accessibility}&bike=false&tickets=false&suburban=${connection.suburban}&subway=${connection.subway}&tram=${connection.tram}&bus=${connection.bus}&ferry=${connection.ferry}&express=${connection.express}&regional=${connection.regional}`;
    } else {
      this.apiUrl = `https://2.vbb.transport.rest/journeys?from=${connection.start.id}&to=${connection.end.id}&when=${connection.when}&passedStations=true&transfers=5&transferTime=${connection.transferTime}&accessibility=${connection.accessibility}&bike=false&tickets=false&suburban=${connection.suburban}&subway=${connection.subway}&tram=${connection.tram}&bus=${connection.bus}&ferry=${connection.ferry}&express=${connection.express}&regional=${connection.regional}`;
    }

    console.log(this.apiUrl);

    /*
    from.latitude/to.latitude: Required. Latitude (e.g. 52.543333).
    from.longitude/to.longitude: Required. Longitude (e.g. 13.351686).
    from.name/to.name: Name of the locality (e.g. ATZE Musiktheater).
    from.id/to.id: POI ID (e.g. 9980720).
    */

    /*
    bike: Return only bike-friendly journeys. Default: false.
      tickets: Return information about available tickets. Default: false.
      suburban: Include S-Bahn trains? Default: true.
      subway: Include U-Bahn trains? Default: true.
      tram: Include trams? Default: true.
      bus: Include buses? Default: true.
      ferry: Include ferries? Default: true.
      express: Include IC/ICE/EC trains? Default: true.
      regional: Include RE/RB/ODEG trains? Default: true.
      */
      //accessibility: Possible values: partial, complete. Default: none.

    return this.http.get(this.apiUrl);

      /*return new Promise(resolve => {
      this.http.get(this.apiUrl)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, err => {
          console.log(err);
        })
    });*/
  }

  getVVBJourneyByID(legs: string, lineName: string){
    this.apiUrl = `https://2.vbb.transport.rest/journeys/legs/${legs}?lineName=${lineName}`;
    return this.http.get(this.apiUrl);
  }

  getVVBDepartures(station: any, departure: number) {
    this.apiUrl = `https://2.vbb.transport.rest/stations/${station.id}/departures?when=${departure}`;
    return this.http.get(this.apiUrl);
  }

  getConnection(origin?: string, stops?: string, destination?: string, time?: string) {

    console.log("Getting Connection");
    //this.origin += "";
    //this.destination+= "";

    this.apiUrl = this.apiUrl +this.origin + "&" + this.destination + "&" + this.mode + "&" + this.API_KEY;

    console.log(this.apiUrl);

    //this.apiUrl = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU";

    //console.log(this.apiUrl);

/*    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
    };*/

    const requestOptions = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
    };

    return new Promise(resolve => {
      console.log(requestOptions);
      this.http.get(this.apiUrl, requestOptions)
        .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }

  getVRRConnection(){
    let url = "https://openservice-test.vrr.de/static02/XML_TRIP_REQUEST2?ANSIMacro=true&sessionID=0&language=de&requestID=0&command=&itdLPxx_ShowFare=+&itdLPxx_view=&useRealtime=1&itdLPxx_enableMobilityRestrictionOptionsWithButton=&execInst=&itdLPxx_mdvMap2_origin=&itdLPxx_mdvMap2_destination=&itdLPxx_mdvMap2_via=&itdLPxx_mapState_origin=&itdLPxx_mapState_destination=&itdLPxx_mapState_via=&itdLPxx_mdvMap_origin=%3A%3A&itdLPxx_mdvMap_destination=%3A%3A&itdLPxx_mdvMap_via=%3A%3A&itdLPxx_command=&itdLPxx_priceCalculator=&itdLPxx_showTariffLevel=1&ptOptionsActive=1&itOptionsActive=1&placeInfo_origin=invalid&typeInfo_origin=invalid&nameInfo_origin=invalid&placeState_origin=empty&nameState_origin=empty&useHouseNumberList_origin=1&place_origin=&type_origin=stop&name_origin=D%FCsseldorf+Hbf&itdLPxx_id_origin=%3Aorigin&placeInfo_destination=invalid&typeInfo_destination=invalid&nameInfo_destination=invalid&placeState_destination=empty&nameState_destination=empty&useHouseNumberList_destination=1&place_destination=&type_destination=stop&name_destination=Dortmund+Hbf&itdLPxx_id_destination=%3Adestination&placeInfo_via=invalid&typeInfo_via=invalid&nameInfo_via=invalid&placeState_via=empty&nameState_via=empty&useHouseNumberList_via=1&place_via=&type_via=stop&name_via=&itdLPxx_id_via=%3Avia&lineRestriction=403&routeType=LEASTTIME&changeSpeed=normal&itdTripDateTimeDepArr=dep&itdTimeHour=19&itdTimeMinute=55&itdDateDay=17&itdDateMonth=05&itdDateYear=2018&submitButton=anfordern&imparedOptionsActive=1&trITDepMOT=100&trITDepMOTvalue100=10&trITArrMOT=100&trITArrMOTvalue100=10&trITDepMOTvalue101=15&trITArrMOTvalue101=15&trITDepMOTvalue104=10&trITArrMOTvalue104=10&trITDepMOTvalue105=30&trITArrMOTvalue105=30&includedMeans=checkbox&inclMOT_0=on&inclMOT_3=on&inclMOT_6=on&inclMOT_9=on&inclMOT_1=on&inclMOT_4=on&inclMOT_7=on&inclMOT_10=on&inclMOT_2=on&inclMOT_5=on&inclMOT_8=on&inclMOT_11=on&maxChanges=9"  }
}
