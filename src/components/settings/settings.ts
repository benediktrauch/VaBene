import { Component } from '@angular/core';
import {SettingsProvider} from "../../providers/settings/settings";

/**
 * Generated class for the SettingsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsComponent {

  testMode: boolean;
  transferTime: number;
  accessibility: string;

  constructor(private settingsProvider: SettingsProvider) {
    this.testMode = this.settingsProvider.getTestMode();
    this.accessibility = this.settingsProvider.getAccessibility();
    this.transferTime = this.settingsProvider.getTransferTime();
  }

  toggleTestMode() {
    this.settingsProvider.setTestMode();
    this.testMode = this.settingsProvider.getTestMode();
  }

  segmentChanged(event){
    this.settingsProvider.setAccessibility(event.value);
    this.accessibility = event.value;
  }

  setTransferTime(event){
    this.settingsProvider.setTransferTime(event.value);
    this.transferTime = event.value;
  }

}
