import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.tokenService.getToken()

    if (token) {
      //{a: 1} -> {...{a: 1}, authorization: '1234'} -> {a: 1, authorization: '1234'}

      const newHeaders = request.headers.append('Authorization', 'Bearer ' + token)
      const newRequest = request.clone({ headers: newHeaders })

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}
