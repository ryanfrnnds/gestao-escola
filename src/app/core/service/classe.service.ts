import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private classeUrl = 'api/classe/';

  constructor(private http: HttpClient) { }

  buscarSeries(): Observable<any[]> {
    return this.http.get<any[]>(this.classeUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  inserir(): Observable<any[]> {
    return this.http.get<any[]>(this.classeUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
