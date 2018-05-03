import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentTripPage } from './current-trip';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    CurrentTripPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CurrentTripPage),
  ],
})
export class CurrentTripPageModule {}
