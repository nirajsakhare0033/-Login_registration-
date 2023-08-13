import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  //private ser: string = 'this is service';
  private serSert: string = '';

  //creating fun
  public getSer() {
    return this.serSert;
  }
  // public getSerS() {
  //   return this.serSert;
  // }
  public setSerSet(getDataFromHtml: string) {
    this.serSert = getDataFromHtml;
  }
}
