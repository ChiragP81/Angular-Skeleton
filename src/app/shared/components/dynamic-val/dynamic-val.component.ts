
import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms'



@Component({
  selector: 'app-dynamic-val',
  templateUrl: './dynamic-val.component.html',
  styleUrls: ['./dynamic-val.component.css']
})
export class DynamicValComponent implements OnInit {

  regiForm!: FormGroup;
  showMail!:boolean;


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.regiForm = this.formbuilder.group({
      email:[''],
      phone:[''],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })

    this.openMail();
  }

  onSubmit(){
    this.regiForm.markAllAsTouched();
    if(this.regiForm.valid){
      const value = JSON.stringify(this.regiForm.value);
      console.log(value);
      // this.regiForm.reset();
      console.log(this.regiForm.value)
    }
  }

  get email(){
    return this.regiForm.get('email');
  }
  get phone(){
    return this.regiForm.get('phone');
  }
  get password(){
    return this.regiForm.get('password');
  }
  openMail(){
    this.showMail = true;
    this.regiForm.controls['email'].setValidators([
      Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')]);
    this.regiForm.controls['phone'].clearValidators();
    this.regiForm.get('email')?.updateValueAndValidity()
    this.regiForm.get('phone')?.updateValueAndValidity();
  }
  openPhone(){
    this.showMail = !this.showMail;
    this.regiForm.controls['phone'].setValidators([Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]);
    this.regiForm.controls['email'].clearValidators();
    this.regiForm.get('email')?.updateValueAndValidity()
    this.regiForm.get('phone')?.updateValueAndValidity();

  }
}


// This is optional when you want the control of form and add the validation  <used of openmail()>
// this.regiForm.addControl('email', new FormControl('',
// [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')]));
// this.regiForm.removeControl('phone');


    // This is for valuechange functionality
    // this.regiForm.get('email')?.valueChanges.subscribe(
    //   val =>{
    //     console.log(val);
    //   }
    // )
