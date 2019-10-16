import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class UserService {
  public currentUser = this.getCurrentUser();
  public isAuth = this.isAuthenticated()


  constructor (
    private apiService: ApiService,
    private http: HttpClient, 
  ) {}

  setAuth(user: User) {
    if (user && user.token) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.reload();
    }
  }

  purgeAuth() {
    localStorage.removeItem('currentUser');
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login/' : '/register/';
    return this.apiService.post('/user' + route, credentials)
      .pipe(map(
      data => {
        this.setAuth(data);
        return data;
      }
    ));
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  isAuthenticated() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  // Update the user on the server (email, pass, etc)
  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

}