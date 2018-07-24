/**
 * Created by crystal on 2017/11/15.
 */

import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirectice implements OnInit{

  @Input('appHighlight') color:string;
  @Input() highColor:string;

  constructor(private el:ElementRef) {}

  ngOnInit():void{
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.highColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
