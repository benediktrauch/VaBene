import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionFinderProvider {

  apiUrl: string;
  origin: string;
  destination: string;
  mode: string = "mode=transit";

  constructor(public http: HttpClient) {
    this.apiUrl = 'https://maps.googleapis.com/maps/api/directions/json?';
    this.origin = "origin=51.5276949%2C6.9267585";
    this.destination = "destination=50.1109220%2C8.6821270";
  }

  getVVBConnection(connection: any) {
    console.log("VBB Connection");

    if(connection.stopover.id){
      this.apiUrl = `https://2.vbb.transport.rest/journeys?from=${connection.start.id}&to=${connection.end.id}&via=${connection.stopover.id}&when=${connection.when}&passedStations=true&transfers=5&transferTime=${connection.transferTime}&accessibility=${connection.accessibility}&bike=false&tickets=false&suburban=${connection.suburban}&subway=${connection.subway}&tram=${connection.tram}&bus=${connection.bus}&ferry=${connection.ferry}&express=${connection.express}&regional=${connection.regional}`;
    } else {
      this.apiUrl = `https://2.vbb.transport.rest/journeys?from=${connection.start.id}&to=${connection.end.id}&when=${connection.when}&passedStations=true&transfers=5&transferTime=${connection.transferTime}&accessibility=${connection.accessibility}&bike=false&tickets=false&suburban=${connection.suburban}&subway=${connection.subway}&tram=${connection.tram}&bus=${connection.bus}&ferry=${connection.ferry}&express=${connection.express}&regional=${connection.regional}`;
    }

    console.log(this.apiUrl);

    return this.http.get(this.apiUrl);

  }

  getVVBJourneyByID(legs: string, lineName: string){
    this.apiUrl = `https://2.vbb.transport.rest/journeys/legs/${legs}?lineName=${lineName}`;
    return this.http.get(this.apiUrl);
  }

  getVVBDepartures(station: any, departure: number) {
    this.apiUrl = `https://2.vbb.transport.rest/stations/${station.id}/departures?when=${departure}`;
    return this.http.get(this.apiUrl);
  }

  getVRRConnection(){
    let url = "https://openservice-test.vrr.de/static02/XML_TRIP_REQUEST2?ANSIMacro=true&sessionID=0&language=de&requestID=0&command=&itdLPxx_ShowFare=+&itdLPxx_view=&useRealtime=1&itdLPxx_enableMobilityRestrictionOptionsWithButton=&execInst=&itdLPxx_mdvMap2_origin=&itdLPxx_mdvMap2_destination=&itdLPxx_mdvMap2_via=&itdLPxx_mapState_origin=&itdLPxx_mapState_destination=&itdLPxx_mapState_via=&itdLPxx_mdvMap_origin=%3A%3A&itdLPxx_mdvMap_destination=%3A%3A&itdLPxx_mdvMap_via=%3A%3A&itdLPxx_command=&itdLPxx_priceCalculator=&itdLPxx_showTariffLevel=1&ptOptionsActive=1&itOptionsActive=1&placeInfo_origin=invalid&typeInfo_origin=invalid&nameInfo_origin=invalid&placeState_origin=empty&nameState_origin=empty&useHouseNumberList_origin=1&place_origin=&type_origin=stop&name_origin=D%FCsseldorf+Hbf&itdLPxx_id_origin=%3Aorigin&placeInfo_destination=invalid&typeInfo_destination=invalid&nameInfo_destination=invalid&placeState_destination=empty&nameState_destination=empty&useHouseNumberList_destination=1&place_destination=&type_destination=stop&name_destination=Dortmund+Hbf&itdLPxx_id_destination=%3Adestination&placeInfo_via=invalid&typeInfo_via=invalid&nameInfo_via=invalid&placeState_via=empty&nameState_via=empty&useHouseNumberList_via=1&place_via=&type_via=stop&name_via=&itdLPxx_id_via=%3Avia&lineRestriction=403&routeType=LEASTTIME&changeSpeed=normal&itdTripDateTimeDepArr=dep&itdTimeHour=19&itdTimeMinute=55&itdDateDay=17&itdDateMonth=05&itdDateYear=2018&submitButton=anfordern&imparedOptionsActive=1&trITDepMOT=100&trITDepMOTvalue100=10&trITArrMOT=100&trITArrMOTvalue100=10&trITDepMOTvalue101=15&trITArrMOTvalue101=15&trITDepMOTvalue104=10&trITArrMOTvalue104=10&trITDepMOTvalue105=30&trITArrMOTvalue105=30&includedMeans=checkbox&inclMOT_0=on&inclMOT_3=on&inclMOT_6=on&inclMOT_9=on&inclMOT_1=on&inclMOT_4=on&inclMOT_7=on&inclMOT_10=on&inclMOT_2=on&inclMOT_5=on&inclMOT_8=on&inclMOT_11=on&maxChanges=9";
    return this.http.get(url);
  }
}
