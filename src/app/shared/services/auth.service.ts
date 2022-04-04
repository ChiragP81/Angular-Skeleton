import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  baseurl = environment.baseurl;

  userInfo = new BehaviorSubject<any>('');

  name = new BehaviorSubject<any>('');
  constructor(private http: HttpClient ,
              private router:Router,
              private socialAuthService:SocialAuthService ) {

    if (localStorage.getItem('logged-in-user')) {
      const value = localStorage.getItem('logged-in-user')
      if (value && JSON.parse(value)) {
        this.name.next(JSON.parse(value).fname)
        this.userInfo.next(JSON.parse(value))
      }
    }
  }


  // This is for social login via google
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{
    return this.socialAuthService.authState.pipe(
      map((socialUser:SocialUser)=>!socialUser),
      tap((isLOggedin:boolean)=>{
        if(!isLOggedin){
          this.router.navigate(['/auth/login']);
        }
      })
    )
  }


  postuser(data: any) {
    return this.http.post<any>(this.baseurl + "regiinfo/", data);
  }

  getuser() {
    return this.http.get<any>(this.baseurl + "regiinfo/");
  }

  putuser(data: any, id: number) {
    return this.http.put<any>(this.baseurl + "regiinfo/" + id, data);
  }

  deleteuser(id: number) {
    return this.http.delete<any>(this.baseurl + "regiinfo/" + id);
  }

  getimage(){
    return this.http.get<any>('https://api.pexels.com/v1/563492ad6f91700001000001b3ac8f8bf4874407bd26b5d2d31d1324');
  }



}


