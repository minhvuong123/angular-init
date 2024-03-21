import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponse> {
    // return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJTqojzteXwXkL5ssc5-MEmYPWtxoGutk', {
    //   email: email,
    //   password: password,
    //   returnSecureToken: true
    // })

    return new Observable<AuthResponse>((observer) => {
      setTimeout(() => {
        observer.next({
          idToken: 'idToken',
          email: email,
          refreshToken: 'refreshToken',
          expiresIn: '3600',
          localId: 'localId',
        });
      }, 3000);
    }).pipe(
      catchError(
        (errorRes) => {
          return throwError(errorRes);
        }
      ),
      tap((resData: AuthResponse) => {
        const expirationDate = new Date(
          new Date().getTime() + +resData.expiresIn * 1000
        );
        
        const user = new User(
          resData.email,
          resData.localId,
          resData.idToken,
          expirationDate
        );

        this.user.next(user);
      })
    );
  }

  login(email: string, password: string) {
    return new Observable<AuthResponse>((observer) => {
      setTimeout(() => {
        observer.next({
          idToken: 'idToken',
          email: email,
          refreshToken: 'refreshToken',
          expiresIn: '3600',
          localId: 'localId',
        });
      }, 3000);
    }).pipe(
      catchError((errorRes) => {
        return throwError(errorRes);
      }),
      tap((resData: AuthResponse) => {
        const expirationDate = new Date(
          new Date().getTime() + +resData.expiresIn * 1000
        );
        
        const user = new User(
          resData.email,
          resData.localId,
          resData.idToken,
          expirationDate
        );

        this.user.next(user);
      })
    );
  }

  private handleAuthentication(email: string, token: string, expiresIn: number) {

  }

  private HandleError(errorRes: HttpErrorResponse) {

  }

  logout(): void {
    this.user.next(null);
  }
}
