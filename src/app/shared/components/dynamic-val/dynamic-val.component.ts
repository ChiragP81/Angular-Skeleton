import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'



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
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
    this.openMail();

    this.regiForm.get('email')?.valueChanges.subscribe(
      val =>{
        console.log(val);
      }
    )
  }

  onSubmit(){
    if(this.regiForm.valid){
      const value = JSON.stringify(this.regiForm.value);
      console.log(value);
      // console.log(this.regiForm.value)
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
    this.regiForm.addControl('email', new FormControl('',
    [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')]));
    this.regiForm.removeControl('phone');
  }
  openPhone(){
    this.showMail =! this.showMail;
    this.regiForm.addControl('phone', new FormControl('',
    [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')]));
    this.regiForm.removeControl('email');
  }
}
