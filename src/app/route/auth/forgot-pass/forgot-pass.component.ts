import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  mailForm!: FormGroup;
  isValid: Boolean = false;
  constructor(
    private formbuilder: FormBuilder,
    private service: AuthService
  ) { }

  ngOnInit(): void {


    this.mailForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')]]
    })
  }


  // verifymail(formdata: any) {
  //   // console.log("Formdata value",formdata.value.email);
  //   this.service.getuser().subscribe({
  //     next: (res: any) => {
  //       res.find((val: any) => {
  //         // console.log(val.email)
  //         if (val.email == formdata.value.email) {
  //           console.log('True');
  //         } else {
  //           console.log('False');
  //         }
  //       })
  //     }
  //   })
  // }





  verifymail(formdata: any) {
    this.service.getuser().subscribe({
      next: (res: any) => {
        for (let i in res) {
          console.log(res[i].email)
          this.isValid = true;
          break;
        }
        // if (this.isValid == true) {
        //   console.log('True');
        // }else{
        //   console.log('False');
        // }
      }
    })
  }

  get email() {
    return this.mailForm.get('email');
  }
}
