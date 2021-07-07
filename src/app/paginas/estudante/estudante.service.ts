import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudanteBDMemory, EstudanteFiltro } from '@entidade';
import { HttpParamUtil, ObjectUtil } from '@util';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class EstudanteService {

  private url = 'api/estudante';

  constructor(private http: HttpClient) { }


  buscar(filtro:EstudanteFiltro = null): Observable<EstudanteBDMemory[]> {
    const possuiFiltro = ObjectUtil.possuiValor(filtro, 'serieId') || ObjectUtil.possuiValor(filtro, 'classeId');
    if(!possuiFiltro) {
      return this.buscarTodos();
    }
    const params = HttpParamUtil.criarParams<EstudanteFiltro>(filtro);
    return this.http.get<any[]>(this.url, {params}).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

   private buscarTodos(): Observable<EstudanteBDMemory[]> {
    return this.http.get<EstudanteBDMemory[]>(this.url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

   


}
