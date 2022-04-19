import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpEventType,

} from '@angular/common/http';
import { catchError, finalize, Observable, retry, tap, throwError } from 'rxjs';
import { LoaderSService } from '../services/loader-s.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {


  startDate = Date.now();
  state!: string;
  constructor(
    private injector: Injector,
    private loadingse: LoaderSService,

  ) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loadingse.show();
    const token = 'mcf-vg-bhn-jmk'

    const authReq = request.clone({
      //for set  a new header
      setHeaders: {
        Authorization: `${token}`
      },
      // url:request.url.replace('http://','htpps://')
    }
    );



    return next.handle(authReq)
      .pipe(
        retry(2),

        tap(
          (event: HttpEvent<any>) => this.state = event instanceof HttpResponse ? 'succeeded' : '',
          (error: HttpErrorResponse) => this.state = "failed"
        ),
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 500 || err.status === 404) {
              console.log(err.message);
            }
          }
          return throwError(err);
        }),
        finalize(() => {
          //showing the time :- how many times take API to load
          const endDate = Date.now() - this.startDate;

          const msg = `Request method: ${request.method} is work on "${request.urlWithParams}" URL ${this.state} in ${endDate}ms.`;
          // console.log(msg);
          this.loadingse.hide();
        })
      );
  }
}
