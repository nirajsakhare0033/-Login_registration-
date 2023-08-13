import { Component } from '@angular/core';
import { MyServiceService } from './service/my-service.service';

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
  //setData
  constructor(public service:MyServiceService){

  }
  setData(valueFromHtml:string){
     this.service.setSerSet(valueFromHtml);
     //console.log(valueFromHtml)
  }

}
