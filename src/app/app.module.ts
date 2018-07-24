import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heros/in-memory-data.service';

import { GlobalVar } from './globalVar';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { AppDetailComponent } from './detail/app-detail.component';
import { DeleteHeroComponent } from './heros/delete.component';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './quest-form/dynamic-form.component';
import { DynamicFormQuestComponent } from './quest-form/dynamic-form-quest';

import { HeroServices } from './heros/hero.services';

import { HighlightDirectice } from './attr-directive/attr.directive';
import { AddHelloPipe } from './pipe/public.pipe';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    AppDetailComponent,
    DeleteHeroComponent,
    HighlightDirectice,
    AddHelloPipe,
    FormComponent,
    DynamicFormComponent,
    DynamicFormQuestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroServices,GlobalVar],
  bootstrap: [AppComponent]
})
export class AppModule { }


