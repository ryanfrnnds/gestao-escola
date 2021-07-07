import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Classe } from '@entidade';
import { HttpParamUtil, ObjectUtil } from '@util';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private url = 'api/classe';

  constructor(private http: HttpClient) { }

  buscar(filtro:Classe = null): Observable<Classe[]> {

     const possuiFiltro = ObjectUtil.possuiValor(filtro, 'id');
    if(!possuiFiltro) {
      return this.buscarTodos();
    }
    const params = HttpParamUtil.criarParams<Classe>(filtro);
    return this.http.get<any[]>(this.url, {params}).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  private buscarTodos(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
