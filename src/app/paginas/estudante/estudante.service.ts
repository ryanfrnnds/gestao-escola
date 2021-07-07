import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudante, EstudanteBDMemory, EstudanteFiltro } from '@entidade';
import { ClasseService, SerieService } from '@services';
import { HttpParamUtil, ObjectUtil } from '@util';
import { BehaviorSubject, forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class EstudanteService {
  public subjectPesquisar = new BehaviorSubject(false);
  public pesquisarObservable = this.subjectPesquisar.asObservable();

  public quantidadeEstudantes = 5;

  private url = 'api/estudante';

  constructor(private http: HttpClient, private classeService: ClasseService, private serieService: SerieService) { }

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
  }

  public gerarMaisTrezentos(): void {
    forkJoin(
      {
        series: this.serieService.buscar(),
        classes: this.classeService.buscar(),
      }
    ).subscribe(forkJoin => {
      const fimDaAdicao = this.quantidadeEstudantes + 300;
      for (let index = 0; index < 300; index++) {
        this.quantidadeEstudantes++;
        const estudanteBDMemory: EstudanteBDMemory = {
          nome: `Nome do aluno ${this.quantidadeEstudantes}`,
          ra: Number(`${this.quantidadeEstudantes}${this.quantidadeEstudantes}${this.quantidadeEstudantes}${this.quantidadeEstudantes}${this.quantidadeEstudantes}${this.quantidadeEstudantes}`),
        }
        const numeroAleatorioClasse = Math.floor(Math.random() * forkJoin.classes.length);
        const numeroAleatorioSerie = Math.floor(Math.random() * forkJoin.classes.length);
        estudanteBDMemory.classeId = forkJoin.classes[numeroAleatorioClasse].id;
        estudanteBDMemory.serieId = forkJoin.series[numeroAleatorioSerie].id;
        this.salvar(estudanteBDMemory).subscribe(estudante => {
          if(this.quantidadeEstudantes == fimDaAdicao) {
            this.subjectPesquisar.next(true);
          }
        });
      } 
    });
  }

  private salvar(estudanteBDMemory:EstudanteBDMemory): Observable<EstudanteBDMemory> {
    return this.http.post<EstudanteBDMemory>(this.url, estudanteBDMemory).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }))
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
