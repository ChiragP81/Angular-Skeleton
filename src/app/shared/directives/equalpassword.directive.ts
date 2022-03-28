import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEqualpassword]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:EqualpasswordDirective,
    multi:true
  }]
})
export class EqualpasswordDirective {

  @Input()
  appEqualpassword!: string;

  validate(control:AbstractControl): {[key:string]:any} | null{
    const controlcomp = control.parent?.get(this.appEqualpassword);

    if(controlcomp && controlcomp.value !== control.value){
      return {'unEqual':true};
    }
    return null;
  }

}
