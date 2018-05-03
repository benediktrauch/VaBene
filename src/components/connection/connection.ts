import { Component } from '@angular/core';

/**
 * Generated class for the ConnectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class ConnectionComponent {

  text: string;

  constructor() {
    console.log('Hello ConnectionComponent Component');
    this.text = 'Hello World';
  }

}
