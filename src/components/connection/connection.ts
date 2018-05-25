import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AgmMap} from "@agm/core";
import {NavController} from "ionic-angular";
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";
import {DateTimeServiceProvider} from "../../providers/date-time-service/date-time-service";

/**
 * Generated class for the ConnectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 *
 * styles: [`
 agm-map {
      height: 300px;
    }
 `],
 template: `
 <agm-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom">
 <agm-marker [latitude]="latitude" [longitude]="longitude"></agm-marker>
 </agm-map>`
 */

@Component({
  selector: 'connection',
  templateUrl: 'connection.html',
})
export class ConnectionComponent implements OnInit{
  @ViewChildren(AgmMap) maps: QueryList<AgmMap>;

  @Input() details: boolean;
  @Input() connectionIndex: any;

  expandedDetails: boolean = false;
  visibleElement: string;
  connection: any;
  allConnections: any;

  myNumber: number;

  passedStations: boolean = false;

  fastestConnection: number;
  fastestBool: boolean = false;

  constructor(public nav: NavController,
              private dataExchangeProvider: DataExchangeProvider,
              private dateTimeService: DateTimeServiceProvider) {
    this.allConnections = this.dataExchangeProvider.getConnectionSearchResults();

    for(let i = 0; i < this.allConnections.length; i ++){
      let depTime = new Date();
      depTime.setTime(Date.parse(this.allConnections[i].departure));
      let arrTime = new Date();
      arrTime.setTime(Date.parse(this.allConnections[i].arrival));
      let travTime = (arrTime.valueOf() - depTime.valueOf());

      console.log(travTime);

      if(!this.fastestConnection) {
        this.fastestConnection = travTime;
      } else if(travTime < this.fastestConnection){
        this.fastestConnection = travTime;
      }
    }

    console.log(this.fastestConnection);
  }

  ngOnInit(){
    this.myNumber = this.connectionIndex;
/*
    this.allConnections = this.dataExchangeProvider.getConnectionSearchResults();
*/
    console.log(this.connectionIndex);
    if(this.connectionIndex){
      this.connection = this.allConnections[this.connectionIndex];
    } else {
      this.connection = this.allConnections[0];
    }

    let currentDep = new Date();
    currentDep.setTime(Date.parse(this.allConnections[this.myNumber].departure));
    let currentArr = new Date();
    currentArr.setTime(Date.parse(this.allConnections[this.myNumber].arrival));
    if((currentArr.valueOf() - currentDep.valueOf()) <= this.fastestConnection){
      this.fastestBool = true;
    }

  }

  ionViewDidLoad() {
    this.maps.forEach((element, index, array)=> {
      element.triggerResize();
    });
  }


  getVBBTime(date: string) {
    return this.dateTimeService.getVBBTime(date);
    /*let timeStamp = new Date();
    timeStamp.setTime(Date.parse(date));
    return timeStamp.toLocaleTimeString().substr(0, 5);*/
  }

  getVBBDate(date: string) {
    return this.dateTimeService.getVBBDate(date);
/*
    let timeStamp = new Date();
    timeStamp.setTime(Date.parse(date));
    return timeStamp.toLocaleDateString() + ', ' + timeStamp.toLocaleTimeString().substr(0, 5);*/
  }

  getVBBTravelTime(depart: string, arrival: string) {
    return this.dateTimeService.getVBBTravelTime(depart, arrival);
/*
    let depTime = new Date();
    depTime.setTime(Date.parse(depart));
    let arrTime = new Date();
    arrTime.setTime(Date.parse(arrival));

    let returnTime = (new Date((arrTime.valueOf() - depTime.valueOf()) - 60 * 60 * 1000)).toLocaleTimeString();
//.substr(0, (returnTime.length - 3));
    return returnTime.substr(0, (returnTime.length - 3)) + " h";*/
  }

  toggleDetails() {
    this.expandedDetails = !this.expandedDetails;
  }

  togglePassedStations() {
    this.passedStations = !this.passedStations;
  }

  toggleStationDetails(stepId: string, stationId: string) {
    if (this.visibleElement === stepId + stationId) {
      this.visibleElement = '';
    } else {
      this.visibleElement = stepId + stationId;
    }
    this.maps.forEach((element, index, array)=> {
      element.triggerResize();
    });
    //this.maps.triggerResize();
  }

  startLiveTracking() {
    this.nav.push('CurrentTripPage', {navParams: this.connectionIndex, connectionIndex: this.connectionIndex});
  }
}
