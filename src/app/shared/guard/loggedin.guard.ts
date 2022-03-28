import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
  constructor(private route:Router) { }

  getToken() {
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false;
    }
  }

  canActivate() {
    if (this.getToken()) {
      this.route.navigate(['/feature/dashboard']);
      return false
    } else {
      return true;
    }
  }
}
