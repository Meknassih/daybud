import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginResponse } from './types/ApiAuth';
import { ApiError } from './types/ApiError';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  authToken = '';
  refreshToken = '';
  user: any;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse | ApiError> {
    const subject = new Subject<LoginResponse | ApiError>();
    this.http
      .post<Response>('https://api.meknassi.com/api/v1/auth/login', {
        email,
        password,
      })
      .subscribe((response) => {
        if (response.success) {
          this.authToken = response.data.tokens.accessToken;
          this.refreshToken = response.data.tokens.refreshToken;
          this.user = response.data.user;
          subject.next(response as LoginResponse);
        } else subject.next(response as ApiError);
      });
    return subject.asObservable();
  }
}

type Response = LoginResponse & ApiError;
