/**
 * Created by crystal on 2017/11/13.
 */


import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector:'delete-hero',
  template:`
    <h4>使用 EventEmitter 实现自定义事件</h4>
    <div *ngFor="let hero of heroess">
      <p>{{hero.name}} <button (click)="delete(hero)">删除</button></p>
    </div>
  `
})

export class DeleteHeroComponent {

  @Output() deleteRequest = new EventEmitter();

  @Input() heroess: Hero[];

  delete(hero){
    this.deleteRequest.emit(hero);
  }
}
