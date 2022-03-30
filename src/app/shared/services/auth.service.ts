import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = environment.baseurl;

  userInfo = new BehaviorSubject<any>('');

  name = new BehaviorSubject<any>('');
  constructor(private http: HttpClient) {
    if (localStorage.getItem('logged-in-user')) {
      const value = localStorage.getItem('logged-in-user')
      if (value && JSON.parse(value)) {
        this.name = new BehaviorSubject<string>(JSON.parse(value).fname);
        this.userInfo = new BehaviorSubject<string>(JSON.parse(value));
      }
    }
  }


  postuser(data: any) {
    return this.http.post<any>(this.baseurl + "regiinfo/", data);
  }

  getuser() {
    return this.http.get<any>(this.baseurl + "regiinfo/");
  }

  putuser(data:any, id:number){
    return this.http.put<any>(this.baseurl + "regiinfo/" + id, data);
  }

  deleteuser(id:number){
    return this.http.delete<any>(this.baseurl+"regiinfo/" +id);
  }

}

