/**
 * Created by crystal on 2017/11/20.
 */
import { Injectable } from '@angular/core';
import { QuestionBase } from './quest-base';
import { DropdownQuestion } from './quest-dropdown';
import { TextboxQuestion } from './quest-textbox';

export const CONSTANT = {
  SHOW: '1'
};

@Injectable()
export class QuestionServices{
  getQuestions(){
    let question : QuestionBase<any>[] =[
      new DropdownQuestion({
        key:'brave',
        label:'Bravery Rating',
        options:[
          {key:'solid',value:'Solid'},
          {key:'great',value:'Great'},
          {key:'good',value:'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order:3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label:'First name',
        value:'Crystal',
        required:true,
        order:1
      }),

      new TextboxQuestion({
        key: 'email',
        label:'Email',
        type:'email',
        order:2
      })
    ]
    return question.sort((a,b)=>a.order-b.order);
  }
}
