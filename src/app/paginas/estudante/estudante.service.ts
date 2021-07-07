import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudante } from '@entidade';
import { HttpParamUtil, ObjectUtil } from '@util';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class EstudanteService {

  private url = 'api/estudante';

  constructor(private http: HttpClient) { }


  buscar(filtro:Estudante = null): Observable<Estudante[]> {
    const possuiFiltro = ObjectUtil.possuiValor(filtro, 'serieId') || ObjectUtil.possuiValor(filtro, 'classeId');
    if(!possuiFiltro) {
      return this.buscarTodos();
    }
    const params = HttpParamUtil.criarParams<Estudante>(filtro);
    console.log(params);
    return of(null);
    /*
    return this.http.get<any[]>(this.url, {params}).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
    */
  }

   private buscarTodos(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(this.url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

   


}
