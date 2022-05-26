import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private KEY = 'jwt'
  isLoggedIn$ = new BehaviorSubject(this.getToken())

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.KEY, token)
    this.isLoggedIn$.next(token)
  }

  getToken() {
    return localStorage.getItem(this.KEY)
  }

  delToken() {
    localStorage.removeItem(this.KEY)
    this.isLoggedIn$.next(null)
  }
}
