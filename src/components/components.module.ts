import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation';
import { SearchComponent } from './search/search';
import { IonicPageModule } from "ionic-angular";
import { CameraComponent } from './camera/camera';
import { ConnectionComponent } from './connection/connection';
import { SettingsComponent } from './settings/settings';
import { MapComponent } from './map/map';
import {AgmCoreModule} from "@agm/core";

@NgModule({
	declarations: [
	  NavigationComponent,
    SearchComponent,
    CameraComponent,
    ConnectionComponent,
    SettingsComponent,
    MapComponent],

	imports: [
    IonicPageModule.forChild(SearchComponent),
    IonicPageModule.forChild(NavigationComponent),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU'
    })
  ],
	exports: [
	  NavigationComponent,
    SearchComponent,
    CameraComponent,
    ConnectionComponent,
    SettingsComponent,
    MapComponent]
})
export class ComponentsModule {}
