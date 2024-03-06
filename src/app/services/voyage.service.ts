import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Voyage } from '../models/voyage';
import { FormVoyage } from '../models/form-voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Voyage[]> {
    return this.httpClient.get<Voyage[]>(this.apiUrl + "voyages").pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getOne(id: number): Observable<Voyage> {
    return this.httpClient.get<Voyage>(this.apiUrl + "voyages/" + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  post(voyage: FormVoyage): Observable<Voyage> {
    return this.httpClient.post<Voyage>(this.apiUrl + "voyages", voyage).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  put(voy: FormVoyage): Observable<Voyage> {
    return this.httpClient.put<Voyage>(this.apiUrl + "voyages/" + voy.id, voy).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  delete(id: number): Observable<Voyage> {
    return this.httpClient.delete<Voyage>(this.apiUrl + 'voyages/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new ErrorEvent(error.error["hydra:description"]));
  }




}
