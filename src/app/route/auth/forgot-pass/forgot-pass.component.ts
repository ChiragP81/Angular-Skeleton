import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})

export class ForgotPassComponent implements OnInit {


  userId!:string ;
  mailForm!: UntypedFormGroup;
  isValid: Boolean = false;
  constructor(
    private formbuilder: UntypedFormBuilder,
    private service: AuthService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.mailForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')]]
    })
  }


  verifymail(formdata: any) {
    // console.log("Formdata value",formdata.value.email);
    this.service.getuser().subscribe({
      next: (res: any) => {
        let user = res.find((val: any) => val.email == formdata.value.email)
        // console.log(user);

        if (user) {
          this.userId = user.id;
          console.log(user.id);
          this.service.forgotPassword(formdata.value.email);
          // console.log('True');
        } else {
          this.snackbar.opensnackbar('User not found or you have enter wrong email');
          // console.log('False');
        }
        this.mailForm.reset();
      }
    })
  }



  get email() {
    return this.mailForm.get('email');
  }
}
