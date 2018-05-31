import {NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectionDetailPage } from './connection-detail';
import {ComponentsModule} from "../../components/components.module";
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ConnectionDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicModule,
    IonicPageModule.forChild(ConnectionDetailPage),
  ],
})
export class ConnectionDetailPageModule {}
