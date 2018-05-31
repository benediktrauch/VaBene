import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {

  testMode: boolean = true;
  transferTime: number = 0;
  accessibility: string = 'none';

  constructor() {
  }

  getTestMode() {
    return this.testMode;
  }

  setTestMode() {
    this.testMode = !this.testMode;
  }

  getTransferTime() {
    return this.transferTime;
  }

  setTransferTime(time: number) {
    this.transferTime = time;
  }
  getAccessibility() {
    return this.accessibility;
  }

  setAccessibility(accessibility: string) {
    this.accessibility = accessibility;
  }
}
