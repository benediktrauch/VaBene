import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Content} from "ionic-angular";

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
 * Generated class for the CameraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})
export class CameraComponent implements OnInit {

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  @ViewChild('canvas')
  private canvasRef: ElementRef;
  @ViewChild(Content) content: Content;

  renderer: WebGLRenderer;
  width: number;
  height: number;

  //@ViewChild('videoElement') videoElement: any;
  video: any;
  deviceList: any[] = [];
  selectedDevice: any;

  changeDevice: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  swapCamera() {
    console.log("swap");
    this.changeDevice = !this.changeDevice;
  }

  ngAfterViewInit() {
    console.log("ionViewWillEnter");
    this.height = this.content.contentHeight;
    this.width = this.content.contentWidth;
    console.log(this.content);
    console.log(this.canvasRef);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      ARController.getUserMediaThreeScene({
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
