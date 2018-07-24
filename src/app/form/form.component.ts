/**
 * Created by crystal on 2017/11/17.
 */

import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Person } from './Person';
import {GlobalVar} from "../globalVar";

@Component({
  selector:'person-form',
  templateUrl:'./form.component.html',
  styleUrls:['./form.css']
})
export class FormComponent{
  personFormGroup:FormGroup;

  constructor(private fb: FormBuilder,public global:GlobalVar){
    this.createForm();
  }

  createForm(){
    this.personFormGroup=this.fb.group({
      'nameform':new FormControl(this.person.name,[
        Validators.required
      ]),
      age: new FormControl(this.person.age),
      sex: new FormControl(this.person.sex),
      marry: new FormControl(this.person.marry),
      phone: new FormControl(this.person.phone)
    })

    console.log(this.personFormGroup.get('nameform').value);

    /*this.personFormGroup=this.fb.group({
      'nameform':Validators.required
    })*/
  }

  sex=['男','女'];
  person=new Person('crystal22',20,'女',false);

  submit=false;

  onsubmit(){
    this.submit=true;
  }

  get diagnostic() { console.log(this.person);return JSON.stringify(this.person); }
}

