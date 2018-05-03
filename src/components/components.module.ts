import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation';
import { SearchComponent } from './search/search';
import { IonicPageModule } from "ionic-angular";
import { CameraComponent } from './camera/camera';
import { ConnectionComponent } from './connection/connection';
import { SettingsComponent } from './settings/settings';

@NgModule({
	declarations: [
	  NavigationComponent,
    SearchComponent,
    CameraComponent,
    ConnectionComponent,
    SettingsComponent],

	imports: [
    IonicPageModule.forChild(SearchComponent),
    IonicPageModule.forChild(NavigationComponent)
  ],
	exports: [
	  NavigationComponent,
    SearchComponent,
    CameraComponent,
    ConnectionComponent,
    SettingsComponent]
})
export class ComponentsModule {}
