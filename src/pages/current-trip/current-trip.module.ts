import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentTripPage } from './current-trip';
import {ComponentsModule} from "../../components/components.module";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    CurrentTripPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CurrentTripPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAByyZdPMk_anSbRsM-TCJLdBqClMKGAA8'
    }),
  ],
})
export class CurrentTripPageModule {}
