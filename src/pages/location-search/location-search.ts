import {Component, ElementRef, ViewChild} from '@angular/core';
import {Content, IonicPage, NavParams} from 'ionic-angular';
import {LocationProvider} from "../../providers/location/location";
import {SettingsProvider} from "../../providers/settings/settings";

import {ARController, ARThreeScene, artoolkit} from 'jsartoolkit5';
import {
  WebGLRenderer,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  FlatShading
} from 'three';
import {DynamicTextureProvider} from "../../providers/dynamic-texture/dynamic-texture";
import {DataExchangeProvider} from "../../providers/data-exchange/data-exchange";
import {DateTimeServiceProvider} from '../../providers/date-time-service/date-time-service';

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

  myMap = {
    zoom: 5
  };

  constructor(public navParams: NavParams,
              public locationProvider: LocationProvider,
              private settingsProvider: SettingsProvider,
              private dynamicTextureProvider: DynamicTextureProvider,
              private dataExchangeProvider: DataExchangeProvider,
              private dateTimeServiceProvider: DateTimeServiceProvider) {
    this.locationProvider.findUserLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationSearchPage');
    this.myLocation = this.locationProvider.getUserLocation();
    this.myMap.zoom = 15;
  };

  ionViewWillLeave() {
    this.stopCamera();
  }

  stopCamera() {
    if (this.myARController !== undefined) {
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
      this.height = this.content.contentWidth * (6 / 5);
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
              renderer.setSize(this.width * (6 / 5), this.width);
              renderer.domElement.style.transformOrigin = '0 0';
              renderer.domElement.style.transform = 'rotate(-90deg) translateX(-100%)';
            } else {
              renderer.setSize(this.width, this.height);
            }

            const text = this.makeTextBlock();
            this.trackMarker(arScene, arController, 0, text);

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
  private makeTextBlock(): Mesh {

    let temp = this.dataExchangeProvider.getDepartures();

    let currentDepartures: string = 'Abfahrten:;';

    for(let depart of temp){
      currentDepartures += (`${depart.when? this.dateTimeServiceProvider.getVBBTime(depart.when) : this.dateTimeServiceProvider.getVBBTime(depart.xformerScheduledWhen)} Uhr, ${depart.line.name} nach ${depart.direction};`);
    }

    console.log(currentDepartures);

    let text = new DynamicTextureProvider();

    text.drawTextCooked({
      text: currentDepartures,
      align: 'left',
      font: (0.03*512)+'px Arial'
    });

    console.log("text");

    let material = new MeshBasicMaterial({
      map: text.texture
    });

    let plane = new Mesh(
      new PlaneGeometry(10, 8, 4),
      material
    );

    plane.material.shading = FlatShading;
    plane.position.z = 0.5;
    return plane;
  }

  private trackMarker(arScene: ARThreeScene, arController, markerId: number, object: Mesh) {
    let marker = arController.createThreeBarcodeMarker(markerId, 1);
    marker.add(object);
    arScene.scene.add(marker);
  }

  onResize(e) {
    console.log('resized! ', e);
    this.width = this.content.contentWidth;
    this.height = this.content.contentHeight;
    this.renderer.setSize(this.width, this.height);
  }
}
