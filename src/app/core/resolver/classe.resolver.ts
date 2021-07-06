import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Classe } from '@entidade';
import { ClasseService, SerieService } from '@services';
import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class ClasseResolver
  implements Resolve<Observable<Array<Classe>>>
{

  constructor(private classeService: ClasseService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.classeService.buscar();
  }
}
