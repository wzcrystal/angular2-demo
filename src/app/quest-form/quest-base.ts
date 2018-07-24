/**
 * Created by crystal on 2017/11/20.
 */

export class QuestionBase<T>{
  value:T;
  key:string;
  label:string;
  required:boolean;
  order:number;
  controlType:string;


  constructor(option:{
    value?:T,
    key?:string,
    label?:string,
    required?:boolean,
    order?:number,
    controlType?:string
  } = {}){
    this.value = option.value;
    this.key = option.key || '';
    this.label = option.label || '';
    this.required = !!option.required;
    this.order = option.order===undefined?1:option.order;
    this.controlType = option.controlType || '';
  }
}
