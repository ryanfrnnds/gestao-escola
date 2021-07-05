import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoadService {
  public subjectMostrar = new BehaviorSubject(false);
  public mostrar = this.subjectMostrar.asObservable();

  constructor() { }
}
