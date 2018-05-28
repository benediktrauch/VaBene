import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";
import {DateTimeServiceProvider} from "../../providers/date-time-service/date-time-service";

import {SettingsProvider} from "../../providers/settings/settings";

import {ARController, ARThreeScene, artoolkit} from 'jsartoolkit5';
import {
  DoubleSide,
  WebGLRenderer,
  Mesh,
  HemisphereLight,
  MeshNormalMaterial,
  BoxGeometry,
  IcosahedronGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  FlatShading
} from 'three';
import {LocationProvider} from "../../providers/location/location";


/**
 * Generated class for the CurrentTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-current-trip',
  templateUrl: 'current-trip.html',
})
export class CurrentTripPage implements OnInit {

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  @ViewChild('canvas')
  private canvasRef: ElementRef;
  @ViewChild(Content) content: Content;

  renderer: WebGLRenderer;
  width: number;
  height: number;


  @Input() connectionIndex: any;

  connection: any;

  myLocation = {
    long: 13.377704,
    lat: 52.516275
  };

  myMap = {
    zoom: 15
  };

  allConnections: any;

  myDate = Date.now();
  myDateObject = new Date();

  currentLeg: any;
  currentStop: any;
  nextLeg: any;
  nextStop: any;

  legCounter: number = 0;
  stepList: any[];
  stopCounter: number = 0;

  currentTime: number;

  passedStations: boolean = true;
  showMap: boolean = false;

  myInterval: any;
  myARController: any;

  rightCube: any;
  rightPlatform: number = 0;
  wrongCube: any;


  constructor(public nav: NavController,
              private dataExchangeProvider: DataExchangeProvider,
              private dateTimeService: DateTimeServiceProvider,
              public navParams: NavParams,
              private settingsProvider: SettingsProvider,
              private  locationProvider: LocationProvider) {

    if (typeof this.navParams.data.connectionIndex !== 'number') {
      this.connectionIndex = 0;
      //this.nav.setRoot('ManualSearchPage');
    } else {
      this.connectionIndex = this.navParams.data.connectionIndex;
    }
    this.allConnections = this.dataExchangeProvider.getConnectionSearchResults();
  }

  ngOnInit() {
    //console.log(this.connectionIndex);
    if (this.connectionIndex) {
      this.connection = this.allConnections[this.connectionIndex];
    } else {
      this.connection = this.allConnections[0];
    }

    if (this.settingsProvider.getTestMode()) {
      //this.currentTime = 1527098460000;
      this.currentTime = 1527098461000;
    } else {
      this.currentTime = Date.now();
    }
  }

  ionViewDidLoad() {
    if (this.connectionIndex) {
      this.connection = this.allConnections[this.connectionIndex];
    } else {
      this.connection = this.allConnections[0];
    }
    // First initialization of trip
    this.currentLeg = this.connection.legs[0];

    this.stepList = this.currentLeg.passed;

    this.nextLeg = this.connection.legs[1];

    this.liveTracking();
    this.startTimer();
  }

  ionViewWillLeave() {
    clearInterval(this.myInterval);
    this.locationProvider.stopWatching();
    console.log("stopped tracking");
    this.myARController = null;
    this.stopCamera();
  }

  stopCamera() {
    if (this.myARController  !== undefined) {
      this.myARController.srcObject.getTracks()[0].stop();
      this.myARController.remove();
    }
  }

  add1Minute() {
    this.currentTime += 60000;
  }

  liveTracking() {
    //console.log(this.currentTime < this.dateTimeService.getTimeStampFromString(this.connection.arrival));
    let date = new Date(this.currentTime);
    this.myLocation = this.locationProvider.getUserLocation();

    console.log(date.toLocaleTimeString());

    // JETZT //zwischen Abfahrt und// vor Ankunft
    if (/*this.currentTime > this.dateTimeService.getTimeStampFromString(this.connection.departure) &&*/
      this.currentTime < this.dateTimeService.getTimeStampFromString(this.connection.arrival)) {

      // Gab es eine Veränderung seit dem letzten Schritt? oder nicht initialisiert
      if (!this.currentStop || this.currentTime > this.dateTimeService.getTimeStampFromString(this.currentStop.departure)) {

        // Aktuellen Schritt suchen
        for (let legIterator = 0; legIterator < this.connection.legs.length; legIterator++) {

          if (this.currentTime > this.dateTimeService.getTimeStampFromString(this.connection.legs[legIterator].departure)) {
            if (this.currentTime < this.dateTimeService.getTimeStampFromString(this.connection.legs[legIterator].arrival)) {

              this.legCounter = legIterator;
              this.currentLeg = this.connection.legs[legIterator];

              console.log(this.currentLeg);

              // Zwischenhalte auflisten
              if (this.currentLeg.passed.length > 0) {
                this.stepList = this.currentLeg.passed;
              }

              console.log(this.connection.legs[legIterator + 1]);

              if (this.connection.legs.length) {
                if (legIterator < this.connection.legs.length) {
                  this.nextLeg = this.connection.legs[legIterator + 1];
                  this.rightPlatform = this.nextLeg.departurePlatform;
                }
              }
            } else {
              this.currentLeg = this.connection.legs[legIterator+1];
/*              if(this.connection.legs[legIterator+2]){
                this.nextLeg = this.connection.legs[legIterator+2];
              } else {
                this.nextLeg = null;
              }*/
            }
          }
        }

        this.rightPlatform = this.nextLeg.departurePlatform;

        if (this.stepList) {
          console.log(this.stepList);
          if(this.stepList[0].station){

            console.log(this.myLocation.lat - this.stepList[0].station.location.latitude);
            console.log(this.myLocation.long - this.stepList[0].station.location.longitude);

          }

          // Letzten Halt entfernen
          while (this.currentTime > this.dateTimeService.getTimeStampFromString(this.stepList[0].departure)) {
            this.stepList.shift();
            if (this.stepList.length < 1) {
              this.stepList = this.nextLeg.passed;
            }
          }
        }
      }

      //console.log(this.currentLeg);
      /*

            if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.legs[this.legCounter].departure)) {
              console.log(this.connection.legs[this.legCounter]);
              if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.legs[this.legCounter].arrival)) {
                this.legCounter++;
                this.stopCounter = 0;
                this.stepList = [];
                //this.stepList.splice(0,this.stepList.length);
              } else if(this.connection.legs[this.legCounter].mode !== 'walking') {
                console.log(this.connection.legs[this.legCounter]);
                this.currentStop = this.connection.legs[this.legCounter].passed[this.stopCounter];
                for(let i = this.stopCounter; i < this.connection.legs[this.legCounter].passed.length; i++){
                  this.stepList.push(this.connection.legs[this.legCounter].passed[i]);
                }
                console.log(this.stepList);
                if (Date.now() > this.dateTimeService.getTimeStampFromString(this.connection.legs[this.legCounter].passed[this.stopCounter])) {
                  this.stopCounter++;
                }
              }
            }

      */

      //this.dateTimeService.getTimeStampFromString();
    } else if (this.currentTime < this.dateTimeService.getTimeStampFromString(this.connection.departure)) {
      console.log("Bald geht's los");
    } else if (this.currentTime > this.dateTimeService.getTimeStampFromString(this.connection.arrival)) {
      console.log("Angekommen");
    }
    else {
      console.log("Ausserhalb des Zeitraums");
    }
  }

  getVVBTime(time: string) {
    return this.dateTimeService.getVBBTime(time);
  }

  startTimer() {
    this.locationProvider.startWatching();
    this.myInterval = setInterval(() => {         //replaced function() by ()=>
      this.liveTracking();
      this.currentTime += 10000;
      /*let currentDate = Date.now();
      console.log(currentDate); // just testing if it is working*/
    }, 10000);
  }

  togglePassedStations() {
    this.passedStations = !this.passedStations;
  }

  toggleMapAndCamera() {
    this.loadCam();
    this.showMap = !this.showMap;
  }

  ionViewWillEnter() {
    this.loadCam();
  }

  loadCam() {
    if (!this.showMap) {
      console.log("ionViewWillEnter");
      this.height = this.content.contentWidth  * (6 / 5);
      this.width = this.content.contentWidth;
      console.log(this.content);
      console.log(this.canvasRef);
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.myARController = ARController.getUserMediaThreeScene({
          maxARVideoSize: 640,
          facingMode: 'environment', //'user' for front camera 'environment' for back
          cameraParam: 'assets/data/camera_para.dat',
          onSuccess: (arScene: ARThreeScene, arController, arCamera) => {
            arController.setPatternDetectionMode(artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX);

            let renderer = new WebGLRenderer({
              antialias: true,
              alpha: true,
              canvas: this.canvas
            });

            this.renderer = renderer;

            if (arController.orientation === 'portrait') {
              renderer.setSize(this.height, this.width);
              renderer.domElement.style.transformOrigin = '0 0';
              renderer.domElement.style.transform = 'rotate(-90deg) translateX(-100%)';
            } else {
              renderer.setSize(this.width, this.height);
            }

            for (let i = 0; i < 63; i++){
              if (i == this.rightPlatform.valueOf()) {
                this.trackMarker(arScene, arController, this.rightPlatform.valueOf(), this.createRightPlane());
              } else {
                this.trackMarker(arScene, arController, i.valueOf(), this.createWrongPlane());
              }
            }

            let tick = () => {
              arScene.process();
              arScene.renderOn(renderer);
              requestAnimationFrame(tick);
            };
            tick();
          }
        });
      }
    }
  }

  private trackMarker(arScene: ARThreeScene, arController, markerId: number, object: Mesh) {
    let marker = arController.createThreeBarcodeMarker(markerId, 1);
    marker.add(object);
    arScene.scene.add(marker);
  }

  private createRightPlane(): Mesh {
    let plane = new Mesh(
      new PlaneGeometry(1, 1, 1),
      new MeshBasicMaterial({color: 0x00ff00, side: DoubleSide})
    );

    plane.material.shading = FlatShading;
    plane.position.z = 0.5;
    return plane;
  }

  private createWrongPlane(): Mesh {
    let plane = new Mesh(
      new PlaneGeometry(1, 1, 1),
      new MeshBasicMaterial({color: 0xff0000, side: DoubleSide})
    );

    plane.material.shading = FlatShading;
    plane.position.z = 0.5;
    return plane;
  }

  private createText(text: string): Mesh {
    let plane = new Mesh(
      new PlaneGeometry(4, 1, 1),
      new MeshBasicMaterial({color: 0x00ff00, side: DoubleSide})
    );

    plane.material.shading = FlatShading;
    plane.position.z = 0.5;
    return plane;
  }

  private createCube(): Mesh {

    let cube = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshNormalMaterial( { color: 0xffff00 } )
    );
    cube.material.shading = FlatShading;

    cube.position.z = 0.5;
    return cube;
  }

  private createIcosahedron(): Mesh {
    let icosahedron = new Mesh(
      new IcosahedronGeometry(0.7, 1),
      new MeshNormalMaterial()
    );
    icosahedron.material.shading = FlatShading;
    icosahedron.position.z = 0.7;
    return icosahedron;
  }

  onResize(e) {
    console.log('resized! ', e);
    this.width = this.content.contentWidth;
    this.height = this.content.contentHeight;
    console.log("height", this.content.contentHeight);
    console.log("width", this.content.contentWidth);
    this.renderer.setSize(this.width, this.height);
  }
}
