import {Injectable} from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import {share} from "rxjs/operator/share";

@Injectable()
export class GlobalVar{
  globalOne: string;
  globalOneUpdate:Observable<string>;
  globalOneObserver:Observer<string>;
  global2 = '测试e';

  constructor(){
    this.globalOneUpdate = Observable.create((observer: Observer<string>) => {
      this.globalOneObserver = observer;
      console.log(this.globalOneObserver);
    }).share();
    /*this.globalOneUpdate = new Observable<string>(observer => {
      this.globalOneObserver = observer;
      console.log(this.globalOneObserver);
    }).share();*/
  }
  updateGlobalOne(newValue:string){
    this.globalOne = newValue;
    this.globalOneObserver.next(this.globalOne);
  }
}
