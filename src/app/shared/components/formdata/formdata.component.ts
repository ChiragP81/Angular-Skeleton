import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  regiForm!: FormGroup;
  button: string = 'Add';
  constructor(private formbuilder: FormBuilder,
    private service: AuthService,
    public dialogref: MatDialogRef<FormdataComponent>,
    public snackbar: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.regiForm = this.formbuilder.group({
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    if (this.data) {
      this.button = 'Update';
      this.regiForm.controls['fname'].setValue(this.data.fname);
      this.regiForm.controls['lname'].setValue(this.data.lname);
      this.regiForm.controls['email'].setValue(this.data.email);
      this.regiForm.controls['dob'].setValue(this.data.dob);
      this.regiForm.controls['gender'].setValue(this.data.gender);
      this.regiForm.controls['password'].setValue(this.data.password);

    }
  }



  adddetails() {
    if (!this.data) {
      if (this.regiForm.valid) {
        this.service.postuser(this.regiForm.value).subscribe({
          next: () => {
            this.regiForm.reset();
            this.snackbar.opensnackbar('Userdetails Added Succesfully');
            this.dialogref.close('save');
          },
          error: () => {
            this.snackbar.opensnackbar('there is something wrong');
          }
        })
      }
    } else {
      this.updatedetails();
    }
  }



  updatedetails() {
    this.service.putuser(this.regiForm.value, this.data.id).subscribe({
      next: () => {
        let udata = localStorage.getItem("logged-in-user");
        if (JSON.parse(udata!).id == this.data.id) {
          let newData: any = this.regiForm.value;
          newData['id'] = this.data.id;
          localStorage.setItem('logged-in-user', JSON.stringify(newData))
          this.service.name.next(this.regiForm.value.fname);
          this.service.userInfo.next(this.regiForm.value);
        }
        this.regiForm.reset();
        this.snackbar.opensnackbar('Your details are updated successfully');
        this.dialogref.close('update');
      },
      error: () => {
        this.snackbar.opensnackbar('there is an error occur to update your details');
      }
    })
  }


  get fname() {
    return this.regiForm.get('fname');
  }
  get lname() {
    return this.regiForm.get('lname');
  }
  get email() {
    return this.regiForm.get('email');
  }
  get dob() {
    return this.regiForm.get('dob');
  }
  get gender() {
    return this.regiForm.get('gender');
  }
  get password() {
    return this.regiForm.get('password');
  }
}
