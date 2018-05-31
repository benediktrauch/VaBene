import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from "@angular/common/http";
import { AgmMap } from '@agm/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(AgmMap) public agmMap: AgmMap;

  rootPage: any = 'ManualSearchPage';

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private httpClient: HttpClient) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Manuelle Suche', component: 'ManualSearchPage' },
      { title: 'Standort & AR Suche', component: 'LocationSearchPage' },
      { title: 'Suchergbnisse', component: 'SearchResultsPage' },
      { title: 'Aktuelle Reise', component: 'CurrentTripPage' },
      { title: 'Einstellungen', component: 'SettingsPage' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
