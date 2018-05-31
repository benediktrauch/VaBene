import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
    public splashScreen: SplashScreen) {
    this.initializeApp();

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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
