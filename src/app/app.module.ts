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

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPsYY2uFqrzfmHrJAvjrSFqhDoOBRruiU'
    }),
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
    StationFinderProvider
  ]
})
export class AppModule {}
