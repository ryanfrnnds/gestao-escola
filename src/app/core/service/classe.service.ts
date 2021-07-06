import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Classe } from '@entidade';
import { ObjectUtil } from '@util';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private url = 'api/classe';

  constructor(private http: HttpClient) { }

  buscar(classe:Classe = null): Observable<Classe[]> {
    const possuiFiltro = ObjectUtil.possuiValor(classe, 'nome');
    if(!possuiFiltro) {
      return this.buscarTodos();
    }
    
    const urlComFiltro = this.url +`?nome=${classe.nome}`;
    console.log(urlComFiltro);
    return this.http.get<any[]>(urlComFiltro).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  private buscarTodos(): Observable<Classe[]> {
    return this.http.get<any[]>(this.url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  

  inserir(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
