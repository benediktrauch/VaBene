import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeServiceProvider {

  constructor() {
    console.log();
  }

  getVBBTime(date: string) {
    let timeStamp = new Date();
    timeStamp.setTime(Date.parse(date));
    return timeStamp.toLocaleTimeString().substr(0, 5);
  }

  getVBBDate(date: string) {
    let timeStamp = new Date();
    timeStamp.setTime(Date.parse(date));
    return timeStamp.toLocaleDateString() + ', ' + timeStamp.toLocaleTimeString().substr(0, 5);
  }

  getVBBTravelTime(depart: string, arrival: string) {
    let depTime = new Date();
    depTime.setTime(Date.parse(depart));
    let arrTime = new Date();
    arrTime.setTime(Date.parse(arrival));
    let returnTime = (new Date((arrTime.valueOf() - depTime.valueOf()) - 60 * 60 * 1000)).toLocaleTimeString();
    return returnTime.substr(0, (returnTime.length - 3)) + " h";
  }

  getTimeStampFromString(time: string){
    return Date.parse(time);
  }


}
