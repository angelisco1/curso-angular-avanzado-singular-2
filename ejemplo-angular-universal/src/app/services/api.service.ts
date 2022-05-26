import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'http://localhost:4200/api'

  constructor(private http: HttpClient) { }

  getDatosApi(): Observable<any> {
    return this.http.get(this.URL + '/datos')
  }

  login(credenciales: any): Observable<any> {
    return this.http.post(this.URL + '/login', credenciales)
  }

}
