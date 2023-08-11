import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-sharing-one-component-to-another-component',
  templateUrl:
    './data-sharing-one-component-to-another-component.component.html',
  styleUrls: [
    './data-sharing-one-component-to-another-component.component.css',
  ],
})
export class DataSharingOneComponentToAnotherComponentComponent {
  //data Sharing One component to another component
  @Input() fetchData: string;

  //data Sharing One component to another component

  //child to parent

  @Output() myEvent: EventEmitter<string> = new EventEmitter<string>();
  sendData(value: string) {
    this.myEvent.emit(value);
  }
}
