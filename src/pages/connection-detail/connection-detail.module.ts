import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectionDetailPage } from './connection-detail';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ConnectionDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ConnectionDetailPage),
  ],
})
export class ConnectionDetailPageModule {}
