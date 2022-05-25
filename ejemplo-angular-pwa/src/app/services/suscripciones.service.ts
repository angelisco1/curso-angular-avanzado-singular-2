import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionesService {
  private URL: string = 'http://localhost:3000/suscripciones'

  constructor(private http: HttpClient) { }

  guardarSuscripcion(suscripcion: PushSubscription): Observable<any> {
    return this.http.post(this.URL, suscripcion)
  }
}
