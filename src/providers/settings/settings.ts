import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {

  testMode: boolean = true;

  constructor() {
  }

  getTestMode() {
    return this.testMode;
  }

  setTestMode() {
    this.testMode = !this.testMode;
  }


}
