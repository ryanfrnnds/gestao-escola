import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '@entidade';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private serieUrl = 'api/serie/';

  constructor(private http: HttpClient) { }

  buscar(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.serieUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
