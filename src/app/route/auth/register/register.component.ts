import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dob: any;
  hide = true;
  chide = true;
  regi: any = {};
  constructor(
    private service: AuthService,
    private route: Router,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
  }

  onsubmit(form: NgForm) {
    if (form.valid) {
      this.service.postuser(form.value).subscribe({
        next: () => {
          this.snackbar.opensnackbar('Register successfully', 1000);
          this.route.navigate(['/auth/login']);
        },
        error: () => {
          this.snackbar.opensnackbar('There is some error occur');
        }
      })
    }
  }
}
