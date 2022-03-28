import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any,): any {
    let currentyear:any = new Date().getFullYear();
    let userbirth:any = new Date(value).getFullYear();
    let userage = currentyear - userbirth
    return userage;
  }

}
