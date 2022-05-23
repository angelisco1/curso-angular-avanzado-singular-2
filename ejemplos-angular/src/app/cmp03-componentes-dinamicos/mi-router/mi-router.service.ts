import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiRouterService {
  rutaCambiada$ = new BehaviorSubject(window.location.pathname)

  constructor() { }

  navigate(segmentos: Array<string>) {
    const path = segmentos.join('/')
    this.navigateByUrl(path)
  }

  navigateByUrl(path: string) {
    window.history.pushState({}, '', path)
    this.rutaCambiada$.next(path)
  }
}
