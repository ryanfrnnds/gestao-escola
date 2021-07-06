import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Serie } from '@entidade';
import { SerieService } from '@services';
import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class SerieResolver
  implements Resolve<Observable<Array<Serie>>>
{

  constructor(private serieService: SerieService) {}

  resolve(route: ActivatedRouteSnapshot): any {

    return this.serieService.buscarSeries();
  }
}
