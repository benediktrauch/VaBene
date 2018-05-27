import {Component, ElementRef, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LocationProvider} from "../../providers/location/location";
import {SettingsProvider} from "../../providers/settings/settings";

import {ARController, ARThreeScene, artoolkit} from 'jsartoolkit5';
import {
  DoubleSide,
  WebGLRenderer,
  Mesh,
  MeshNormalMaterial,
  BoxGeometry,
  IcosahedronGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  FlatShading
} from 'three';

/**
 * Generated class for the LocationSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location-search',
  templateUrl: 'location-search.html',
})
export class LocationSearchPage {
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  @ViewChild('canvas')
  private canvasRef: ElementRef;
  @ViewChild(Content) content: Content;

  renderer: WebGLRenderer;
  width: number;
  height: number;

  showMap: boolean = false;
  myARController: any;

  myLocation = {
    long: 13.377704,
    lat: 52.516275
  };

  //Greifswalder Str. 169, 10409 Berlin, Deutschland
  //Breitengrad : 52.540869 | Längengrad : 13.438197

  myMap = {
    zoom: 5
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public locationProvider: LocationProvider,
              private settingsProvider: SettingsProvider) {
    this.locationProvider.findUserLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationSearchPage');
    this.myLocation = this.locationProvider.getUserLocation();
    this.myMap.zoom = 15;
    //this.getPosition();
  };

/*
  public getPosition() {

    if (this.settingsProvider.getTestMode()) {
      this.myLocation.long = 13.438197;
      this.myLocation.lat = 52.540869;
      this.myMap.zoom = 15;
      this.locationProvider.setUserLocation(this.myLocation);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("getPosition");
        console.log(position);
        this.myLocation.long = position.coords.longitude;
        this.myLocation.lat = position.coords.latitude;
        this.myMap.zoom = 15;
        this.locationProvider.setUserLocation(this.myLocation);
      })
    }
  }
*/

  findStationNearby() {

  }

  ionViewDidLeave() {
    this.stopCamera();
  }
  stopCamera() {
    if (this.myARController  !== undefined) {
      this.myARController.srcObject.getTracks()[0].stop();
      this.myARController.remove();
    }
  }

  ionViewWillEnter() {
    this.loadCam();
  }

  toggleMapAndCamera() {
    this.loadCam();
    this.showMap = !this.showMap;
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

            const cube = this.createCube();
            const icosahedron = this.createIcosahedron();
            const plane = this.createPlane();
            this.trackMarker(arScene, arController, 5, plane);
            this.trackMarker(arScene, arController, 10, cube);
            this.trackMarker(arScene, arController, 20, icosahedron);

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

  private createPlane(): Mesh {
    let plane = new Mesh(
      new PlaneGeometry(4, 1, 1),
      new MeshBasicMaterial({color: 0x81D8D0, side: DoubleSide})
    );

    plane.material.shading = FlatShading;
    plane.position.z = 0.5;
    return plane;
  }

  private createCube(): Mesh {
    let cube = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshNormalMaterial()
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
