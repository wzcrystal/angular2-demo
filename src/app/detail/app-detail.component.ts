import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroServices } from '../heros/hero.services';
import { Hero } from '../heros/hero';

@Component({
  selector:'app-detail',
  templateUrl:'./app-detail.component.html',
  styleUrls: ['../app.component.css']
})


export class AppDetailComponent implements OnInit{
  constructor(
    private heroServices: HeroServices,
    private route: ActivatedRoute,
    private location: Location
  ){}


  ngOnInit():void{
      this.route.paramMap.switchMap(
        (params: ParamMap)=>this.heroServices.hetHerosById(+params.get('name'))
      ).subscribe(hero =>this.hero = hero);
  }

  @Input() hero:Hero;

  goBack():void{
    this.location.back();
  }


}
