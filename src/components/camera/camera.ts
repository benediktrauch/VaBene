import {Component, ViewChild, OnInit} from '@angular/core';

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

  @ViewChild('videoElement') videoElement: any;
  video: any;
  deviceList: any[] = [];
  selectedDevice: any;

  changeDevice: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.findDevices();
    this.video = this.videoElement.nativeElement;
  }

  findDevices(): void {
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          if (device.kind === 'videoinput') {
            this.deviceList.push(device);
          }
        });

        console.log(this.deviceList.length);
        if (this.deviceList.length === 1) {
          console.log("this.deviceList.length === 1");
          this.onChoseDevice("environment");
        }
      });
  }

  onChoseDevice(selectedValue: any): void {
    let constraints = {
      audio: false,
      video: {
        facingMode: selectedValue
      }
    };
    this.initCamera(constraints);
  }

  initCamera(config: any): void {
    navigator.mediaDevices.getUserMedia(config).then(stream => {
      this.video.srcObject = stream;
      this.video.play();
    }).catch((err) => {
      console.error(err);
    });
  }

  swapCamera() {
    console.log("swap");
    this.changeDevice = !this.changeDevice;
  }
}
