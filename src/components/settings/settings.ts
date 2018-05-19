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

  constructor(private settingsProvider: SettingsProvider) {
    this.testMode = this.settingsProvider.getTestMode();
  }
  toggleTestMode() {
    this.settingsProvider.setTestMode();
    this.testMode = this.settingsProvider.getTestMode();
  }
}
