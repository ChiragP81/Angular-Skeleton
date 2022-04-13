import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.css']
})
export class ConfirmPassComponent implements OnInit {

  con: any = {};
  hide = true;
  chide = true;
  constructor(
    private service: AuthService,
    private snackbar: SnackbarService,
    private route: Router
  ) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.service.putpass(form.value).subscribe({
        next: () => {
          this.snackbar.opensnackbar('Your password has been changed');
          this.route.navigate(['/auth/login']);
        },
        error: () => {
          this.snackbar.opensnackbar('Something went wrong');
        }
      })
      // console.log(form.value);
    }
  }

}
