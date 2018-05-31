import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AgmMap} from "@agm/core";
import {NavController} from "ionic-angular";
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";
import {DateTimeServiceProvider} from "../../providers/date-time-service/date-time-service";


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

  deineReise: string = 'Deine Reise';

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

      if(!this.fastestConnection) {
        this.fastestConnection = travTime;
      } else if(travTime < this.fastestConnection){
        this.fastestConnection = travTime;
      }
    }

  }

  ngOnInit(){
    this.myNumber = this.connectionIndex;

    console.log(this.connectionIndex);
    if(this.connectionIndex){
      this.connection = this.allConnections[this.connectionIndex];
    } else {
      this.connection = this.allConnections[0];
    }

    console.log(this.connection);

    this.connectionInit();
  }

  connectionInit(){
    this.myNumber = this.connectionIndex;

    let currentDep = new Date();

    if(this.allConnections[this.myNumber].departure) {
      currentDep.setTime(Date.parse(this.allConnections[this.myNumber].departure));
    } else {
      currentDep.setTime(Date.parse(this.allConnections[this.myNumber].formerScheduledDeparture));
    }

    let currentArr = new Date();
    if(this.allConnections[this.myNumber].arrival) {
      currentArr.setTime(Date.parse(this.allConnections[this.myNumber].arrival));
    } else {
      currentDep.setTime(Date.parse(this.allConnections[this.myNumber].formerScheduledArrival));
    }

    if((currentArr.valueOf() - currentDep.valueOf()) <= this.fastestConnection){
      this.fastestBool = true;
    } else {
      this.fastestBool = false;
    }
  }

  changeConnection(event) {
    this.connectionIndex = this.connectionIndex + event;
    this.connection = this.allConnections[this.connectionIndex];
    this.connectionInit();
  }

  ionViewDidLoad() {
    this.maps.forEach((element, index, array)=> {
      element.triggerResize();
    });
  }


  getVBBTime(date: string) {
    return this.dateTimeService.getVBBTime(date);
  }

  getVBBDate(date: string) {
    return this.dateTimeService.getVBBDate(date);
  }

  getVBBTravelTime(depart: string, arrival: string) {
    return this.dateTimeService.getVBBTravelTime(depart, arrival);
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
  }

  startLiveTracking() {
    this.nav.push('CurrentTripPage', {navParams: this.connectionIndex, connectionIndex: this.connectionIndex});
  }
}
