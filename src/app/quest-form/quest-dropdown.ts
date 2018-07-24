/**
 * Created by crystal on 2017/11/20.
 */

import { QuestionBase } from './quest-base';

export class DropdownQuestion extends QuestionBase<string>{
  controlType = 'dropdown';
  options:{key:string,value:string}[] = [];

  constructor(options:{}={}){
    super(options);
    this.options = options['options'] || [];
  }
}
