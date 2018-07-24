/**
 * Created by crystal on 2017/11/20.
 */

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './quest-base';
import { QuestionControlServices } from './quest-control.service';

import {GlobalVar} from "../globalVar";

@Component({
  selector:'app-dynamic-form',
  templateUrl:'./dynamic-form.component.html',
  providers:[QuestionControlServices]
})

export class DynamicFormComponent implements OnInit{

  @Input() questions:QuestionBase<any>[] = [];
  form:FormGroup;
  payLoad='';
  subscription:any;
  globalvar:string;

  constructor(private qcs:QuestionControlServices,public global:GlobalVar){

  }

  ngOnInit(){
    console.log(this.questions);
    this.form=this.qcs.toFormGroup(this.questions);
    this.subscription = this.global.globalOneUpdate.subscribe(str =>
      {this.globalvar = str;console.log('执行了',this.globalvar);},error => {
        console.log(error);
      }
    )
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
