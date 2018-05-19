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
import {ApolloModule, /*Apollo */} from "apollo-angular";
import {HttpLinkModule, /*HttpLink */} from "apollo-angular-link-http";
import { DataExchangeProvider } from '../providers/data-exchange/data-exchange';
import { SettingsProvider } from '../providers/settings/settings';
/*
import { InMemoryCache } from 'apollo-cache-inmemory';
*/

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
    SettingsProvider
  ]
})
export class AppModule {
  constructor(
    /*apollo: Apollo, httpLink: HttpLink*/
  ) {
    /*apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({ uri: 'https://api.deutschebahn.com/free1bahnql/v1/graphql' }),
      cache: new InMemoryCache()
    });*/
  }
}
