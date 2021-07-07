import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '@entidade';
import { HttpParamUtil, ObjectUtil } from '@util';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private url = 'api/serie/';

  constructor(private http: HttpClient) { }

   buscar(filtro:Serie = null): Observable<Serie[]> {

     const possuiFiltro = ObjectUtil.possuiValor(filtro, 'id');
    if(!possuiFiltro) {
      return this.buscarTodos();
    }
    const params = HttpParamUtil.criarParams<Serie>(filtro);
    return this.http.get<any[]>(this.url, {params}).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  private buscarTodos(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
