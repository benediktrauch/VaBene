import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationSearchPage } from './location-search';
import {CommonModule} from "@angular/common";
import {AgmCoreModule} from "@agm/core";
import {FormsModule} from "@angular/forms"
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    LocationSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationSearchPage),
    CommonModule,
    FormsModule,
    ComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAByyZdPMk_anSbRsM-TCJLdBqClMKGAA8'
    }),
  ],
})
export class LocationSearchPageModule {}
