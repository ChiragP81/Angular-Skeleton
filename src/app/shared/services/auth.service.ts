import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  baseurl = environment.baseurl;

  userInfo = new BehaviorSubject<any>('');

  name = new BehaviorSubject<any>('');

  token = 'mcf-vg-bhn-jmk'

  //  For adinf headers
  //  httpOptions = {
  //   Headers: new HttpHeaders({
  //     'Content-Type':'appliaction/json',
  //     Authorization:`${this.token};`
  //   })
  // }


  constructor(private http: HttpClient,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private authFire: AngularFireAuth
  ) {

    if (localStorage.getItem('logged-in-user')) {
      const value = localStorage.getItem('logged-in-user');
      if (value && JSON.parse(value)) {
        this.name.next(JSON.parse(value).fname)
        this.userInfo.next(JSON.parse(value))
      }
    }
  }


  // This is for social login via google
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.socialAuthService.authState.pipe(
      //this is used for handle the user
      map((socialUser: SocialUser) => !socialUser),
      tap((isLOggedin: boolean) => {
        if (!isLOggedin) {
          this.router.navigate(['/auth/login']);
        }
      })
    )
  }


  //this is used for handle the error
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }




  postuser(data: any) {
    return this.http.post<any>(this.baseurl + "regiinfo/", data)
      .pipe(catchError(this.handleError));
  }

  getuser() {
    return this.http.get<any>(this.baseurl + "regiinfo/")
      .pipe(catchError(this.handleError));
  }

  putuser(data: any, id: number) {
    return this.http.put<any>(this.baseurl + "regiinfo/" + id, data)
      .pipe(catchError(this.handleError));
  }

  deleteuser(id: number) {
    return this.http.delete<any>(this.baseurl + "regiinfo/" + id)
      .pipe(catchError(this.handleError));
  }



  //Firebase
  forgotPassword(email: any) {
    this.authFire.sendPasswordResetEmail(email).then((res) => {
      console.log('Mail Link has been send',res)
    }, err => {
      console.log(err);
    }

    );
  }

}


