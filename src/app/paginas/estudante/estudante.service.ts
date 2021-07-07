import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudante, EstudanteBDMemory, EstudanteFiltro } from '@entidade';
import { HttpParamUtil, ObjectUtil } from '@util';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class EstudanteService {

  private url = 'api/estudante';

  constructor(private http: HttpClient) { }

  editar(estudante:Estudante): Observable<EstudanteBDMemory> {
    const estudanteBDMemory: EstudanteBDMemory = {
      id: estudante.id,
      nome: estudante.nome,
      ra: estudante.ra,
      classeId: estudante.classe.id,
      serieId: estudante.serie.id
    } 
    console.log()
    return this.http.put(this.url + '/'+ estudanteBDMemory.id, estudanteBDMemory);
    /*
    SALVAR!!!!
    return this.http.post<EstudanteBDMemory>(this.url, estudanteBDMemory).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
    */
  }


  buscar(filtro:EstudanteFiltro = null): Observable<EstudanteBDMemory[]> {
    if(ObjectUtil.possuiAlgumAtributoComValor<EstudanteFiltro>(filtro)) {
       const params = HttpParamUtil.criarParams<EstudanteFiltro>(filtro);
      return this.http.get<any[]>(this.url, {params}).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      );
    }
    return this.buscarTodos();
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
