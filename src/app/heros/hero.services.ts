/**
 * Created by crystal on 2017/11/9.
 */

import { Injectable } from '@angular/core';

import {Headers,Http} from '@angular/http';
import { Hero } from './hero';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";

/*const HEROES = [
  { id: 1, name: 'name1'},
  { id: 2, name: 'name2'}
];*/

@Injectable()
export class HeroServices{

  private herosUrl='api/HEROES.json';

  constructor(
    private http:Http,
    private httpClient:HttpClient
  ){
    var promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(42);
      }, 500);
      console.log("promise started");
    });

    promise.then(x => console.log(x));

    var source = Observable.create((observe) => {
      setTimeout(() => {
        observe.onNext(42);
      }, 500);
      console.log("observable started");
    });

    //source.forEach(x => console.log(x));
  }

  getHeros():Hero[]{
    return null;
  }

  getHerosByUrl(): Promise<Hero[]>{
      return this.http.get(this.herosUrl)
        .toPromise()
        .then(response => response.json() as Hero[])//response.json() as Hero[]
        .catch(this.handleError);
  }

  getHerosByhttp():void{
    this.http.get(this.herosUrl).subscribe(res => res.json());
  }
  //observable返回完整的响应体
  getHerosByClient(): void{
    console.log("httpClient");
    this.httpClient.get<Hero>(this.herosUrl,{observe:'response'}).subscribe(
      data => console.log('httpClient:',data),
      err => console.log(err)
    );
  }
  //常用的数据请求
  getHerosByClient2(): Observable<{}>{
    return this.httpClient.get<Hero>(this.herosUrl);
  }
  //observable转promise
  getHerosByClient3(): Promise<{}>{
    console.log("httpClient3");
    return this.httpClient.get<Hero>(this.herosUrl)
      .toPromise()
      .then(response => {
        console.log(response);
        return Promise.resolve(response);
      },err =>{
        return Promise.reject(err.message || err);
      })//response.json() as Hero[]
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any>{
      return Promise.reject(error.message || error);
  }

  hetHerosById(id:number):Promise<Hero>{
    let heros:Hero[]=this.getHeros();
    for(let i of heros){
      if(i.id===id){
        return Promise.resolve(i);
      }
    }
    return Promise.resolve(null);
  }

  getHerosPromise(type):Promise<string>{
    if(type){
      return Promise.resolve('请求成功');
    }else{
      console.log(type)
      return Promise.reject('请求失败');
    }
  }
}
