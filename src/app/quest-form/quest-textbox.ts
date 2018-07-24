/**
 * Created by crystal on 2017/11/20.
 */

import { QuestionBase } from './quest-base';

export class TextboxQuestion extends QuestionBase<string>{
  controlType = 'textbox';
  type:string;

  constructor( options: {} = {}){
    super(options);
    this.type=options['type'] || '';
  }
}


