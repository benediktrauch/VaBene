import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualSearchPage } from './manual-search';

@NgModule({
  declarations: [
    ManualSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ManualSearchPage),
  ],
})
export class ManualSearchPageModule {}
