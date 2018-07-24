/**
 * Created by crystal on 2017/11/10.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerosComponent } from './heros/heros.component';
import { AppDetailComponent } from './detail/app-detail.component';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './quest-form/dynamic-form.component';

const routes: Routes=[
  {
    path: 'heroes',
    component: HerosComponent
  },
  {
    path: 'heros-detail/:name',
    component: AppDetailComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path:'quest-form',
    component:DynamicFormComponent
  },
  {
    path:'',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
