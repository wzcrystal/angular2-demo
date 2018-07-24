/**
 * Created by crystal on 2017/11/20.
 */

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { QuestionBase } from './quest-base';

@Injectable()
export class QuestionControlServices{
  constructor(){}

  toFormGroup(questions:QuestionBase<any>[]){
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required?
        new FormControl(question.value || '',Validators.required):
        new FormControl(question.value || '');
    });

    console.log(group)

    return new FormGroup(group);
  }
}
