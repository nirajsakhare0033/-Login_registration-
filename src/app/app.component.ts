import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'registration';

  whatToShow = 0;

  btn(num: any) {
    this.whatToShow = num;
  }

  //data Sharing One component to another component

  names: string = 'pinky hai paise wallo ki';

  //data Sharing One component to another component

  getDataFromChild(eventvalue:string) {
    console.log(eventvalue)
  }
}
