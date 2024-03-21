import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "./auth/auth.service";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('auth intercertor')
    return this.authService.user.pipe(take(1), exhaustMap((user) => {
      if (!user) {
        return next.handle(req);
      }

      const modifiedRequest = req.clone({ 
        headers: req.headers.append('Auth', 'xyz'),
        params: new HttpParams().set('auth', user.token)
      });

      return next.handle(modifiedRequest);
    }))

    // return next.handle(req);
    // return next.handle(modifiedRequest).pipe(tap((event) => {
    //   console.log(event);

    //   if (event.type === HttpEventType.Response) {
    //     console.log(event.body)
    //   }
    // }));
  }
}