/**
 * Created by crystal on 2017/11/16.
 */


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'addHello'
})


export class AddHelloPipe implements PipeTransform {
  transform(value:string, addString:string, addNumber:number ): string{
    return value+' '+addString+':'+addNumber;
  }
}
