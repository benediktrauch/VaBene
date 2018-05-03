import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectionDetailPage } from './connection-detail';

@NgModule({
  declarations: [
    ConnectionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectionDetailPage),
  ],
})
export class ConnectionDetailPageModule {}
