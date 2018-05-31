import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { LocationProvider } from '../providers/location/location';
import { ConnectionFinderProvider } from '../providers/connection-finder/connection-finder';
import { ComponentsModule } from "../components/components.module";
import { StationFinderProvider } from '../providers/station-finder/station-finder';
import {ApolloModule} from "apollo-angular";
import {HttpLinkModule} from "apollo-angular-link-http";
import { DataExchangeProvider } from '../providers/data-exchange/data-exchange';
import { SettingsProvider } from '../providers/settings/settings';
import { DateTimeServiceProvider } from '../providers/date-time-service/date-time-service';
import { DynamicTextureProvider } from '../providers/dynamic-texture/dynamic-texture';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastServiceProvider,
    LocationProvider,
    ConnectionFinderProvider,
    StationFinderProvider,
    DataExchangeProvider,
    SettingsProvider,
    DateTimeServiceProvider,
    DynamicTextureProvider
  ]
})
export class AppModule {
  constructor() {

  }
}
