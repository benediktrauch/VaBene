import {NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapComponent } from './map';
import {AgmCoreModule} from "@agm/core";
import { IonicModule } from 'ionic-angular';
import {ComponentsModule} from "../components.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    ComponentsModule,
    IonicModule,
    CommonModule,
    IonicPageModule.forChild(MapComponent),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAByyZdPMk_anSbRsM-TCJLdBqClMKGAA8'
    }),
  ],
})
export class MapModule {}
