import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  private URL: string = 'http://localhost:3000/vendehumos'

  constructor(private http: HttpClient) { }

  getVendehumos(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.URL)
  }

  createVendehumo(vendehumo: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/vendehumos', vendehumo)
  }

  updateVotosVendehumo(vendehumoId: number, numVotos: number): Observable<any> {
    return this.http.patch<any>(`${this.URL}/${vendehumoId}`, { numVotos })
  }
}
