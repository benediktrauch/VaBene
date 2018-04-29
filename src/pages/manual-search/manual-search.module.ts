import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualSearchPage } from './manual-search';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ManualSearchPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ManualSearchPage),
  ],
})
export class ManualSearchPageModule {}
