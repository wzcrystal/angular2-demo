import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { DeleteHeroComponent } from './delete.component';
import { HeroServices } from './hero.services';

import { QuestionServices } from '../quest-form/question.services';
import {GlobalVar} from "../globalVar";

@Component({
  selector: 'my-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['../app.component.css'],
  providers:[QuestionServices]
})
export class HerosComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  isUnchange: boolean = true;
  actionName: string = 'hello';

  questions:any[];
  constructor(private heroServices: HeroServices,
              private questServices:QuestionServices,
              public global:GlobalVar,
              public route: Router){
    this.questions = questServices.getQuestions();
  }

  ngOnInit():void{
    //this.heroes=this.heroServices.getHeros();
    this.heroServices.getHerosByUrl().then(data=>{this.heroes=data;console.log(this.heroes)});
    /*this.heroServices.getHerosPromise(false).then(
      data=>console.log(data)
    ).catch(
      err=>console.log(err)
    );*/
   /* this.heroServices.getHerosPromise(false).then(
      function(data){
        console.log(data);
      }
    ).catch(
      function(data){
        console.log(data);
      }
    );*/
  }

  changeHeros():void{
    this.heroes[0].name = '开心';
    console.log(this.heroes)
  }
  trackByHeros(index, item){
    return item.id;
  }

  onSelect(hero: Hero): void {
    this.selectedHero=hero;
    console.log(hero);
  }

  getEvent(event): void{
    console.log(event.target.value)
  }

  deleteHero(event): void{
    this.global.globalOne = 'changeTwo';
    this.global.global2 = '3333';
    console.log(event);
  }

  getData(): void{
    this.global.updateGlobalOne('初始化');
    this.heroServices.getHerosByUrl().then(data=>console.log('http:',data));
  }

  getData2(): void{
    this.heroServices.getHerosByClient();
  }

  getData3(): void{
    this.heroServices.getHerosByClient2().subscribe(data => {
      console.log(data);
    },err =>{
      console.log(err);
    },() =>{
      console.log('请求结束');
    })
  }

  getData4(): void{
    this.heroServices.getHerosByClient3().then(data => {
      console.log(data);
    },err =>{
      console.log(err);
    })
  }

  goDetail(id): void{
    this.route.navigate(['/heros-detail',id]);
  }
}

/*
enum Color {Red, Green, Blue}
let colorName: string = Color[0];

alert(colorName);
*/




