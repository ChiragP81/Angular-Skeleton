import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {



  constructor(private route: Router) { }

  getToken() {
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false;
    }
  }

  canActivate() {
    if (this.getToken()) {
      return true
    } else {
      this.route.navigate(['/auth']);
      return false;
    }
  }
}

