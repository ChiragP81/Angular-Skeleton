import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderSService {

  public loadersub = new BehaviorSubject<boolean>(false);
  constructor() { }

  getloader():Observable<boolean>{
    return this.loadersub.asObservable();
  }



  show(){
    this.loadersub.next(true);
  }

  hide(){
    this.loadersub.next(false);
  }
}
