import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  mail="ndn@mail.com"
  pass="000000"
  constructor(private service: AuthService,
    private snackbar: SnackbarService,
    private route: Router,
    private socialAuth:SocialAuthService
  ) { }
  ngOnInit(): void {
    this.socialAuth.authState.subscribe(
      (user)=>{
        console.log(user);
    });

  }


  onsubmit(form: NgForm) {
    this.service.getuser().subscribe({
      next: (res: any) => {
        const user = res.find((val: any) => {
          return val.email == form.value.email && val.password == form.value.password
        });
        if (user) {
          this.snackbar.opensnackbar('Successfully login');
          localStorage.setItem('token', 'logintoken');
          localStorage.setItem('logged-in-user', JSON.stringify(user));
          this.route.navigate(['/feature/dashboard']);
        } else {
          this.snackbar.opensnackbar('Email is not valid');
        }
      },
      error: () => {
        this.snackbar.opensnackbar('There is some error occur');
      }
    })
  }


  loginwithG(){
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
}
