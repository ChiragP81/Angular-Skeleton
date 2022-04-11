import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { user } from 'src/app/shared/models/userdetails';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoaderSService } from 'src/app/shared/services/loader-s.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userData!: user;
  hide = true;
  //for social login
  mail = "";
  pass = "";
  Emailfield : boolean = true;
  loading!:boolean;


  public user: SocialUser = new SocialUser;

  constructor(private service: AuthService,
    private snackbar: SnackbarService,
    private route: Router,
    private socialAuth: SocialAuthService,
    private loaderser:LoaderSService
  ) { }

  ngOnInit(): void {
    this.validmail();

    this.loaderser.getloader().subscribe(res =>{
      this.loading = res;
    })
  }


  //For checking email is already exist or not
  validmail() {
    this.service.getuser().subscribe({
      next: (res: any) => {
        for (let i in res) {
          this.mail = res[i].email;
          // console.log(this.mail);
        }
      }
    })

    //This is for social login via google
    this.socialAuth.authState.subscribe({
      next: (guser) => {
        this.user = guser;
        //  console.log(this.user.email);
        //  console.log(this.mail);
        if (this.user.email == this.mail) {
          this.snackbar.opensnackbar('Successfully login');
          localStorage.setItem('token', 'logintoken');
          localStorage.setItem('logged-in-user', JSON.stringify(guser));
          this.route.navigate(['/feature/dashboard']);
        } else {
          this.snackbar.opensnackbar('Error');
        }
      }
    });
  }

  onsubmit(form: NgForm) {
    this.service.getuser().subscribe({
      next: (res: any) => {
        const user = res.find((val: any) => {
          return val.email == form.value.email && val.password == form.value.password ||
           val.phone == form.value.phone && val.password == form.value.password
        });
        if (user) {
          localStorage.setItem('token', 'logintoken');
          localStorage.setItem('logged-in-user', JSON.stringify(user));
          this.route.navigate(['/feature/dashboard']);
          this.snackbar.opensnackbar('Successfully login');
        } else {
          this.snackbar.opensnackbar('User does not exist');
        }
      },
      error: () => {
        this.snackbar.opensnackbar('There is some error occur');
      }
    })
  }




  loginwithG() {
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  signOut() {
    this.socialAuth.signOut();
  }


  openMail(){
    this.Emailfield = true;
  }
  openPhone(){
    this.Emailfield = !this.Emailfield;
  }
}
