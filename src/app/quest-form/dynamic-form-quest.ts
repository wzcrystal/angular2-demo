/**
 * Created by crystal on 2017/11/20.
 */

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {QuestionBase} from './quest-base';

@Component({
  selector:'app-question',
  templateUrl:'./dynamic-form-quest.html'
})

export class DynamicFormQuestComponent{
  @Input() question:QuestionBase<any>;

  @Input() form:FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
