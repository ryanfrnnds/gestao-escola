import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, timer } from 'rxjs';
@Injectable()
export class HeaderService {

  constructor(
    private http: HttpClient,
  ) {}

  public navegarParaLogin() {
    const url = new URL(location.href);
    location.href = `${url.origin}/auth`;
  }
  

  public nomeUsuarioLogado(): string {
    return 'Ryan Batista Fernandes';
  }

  public signOut(): void {
    console.log('Sair do Sistema');
  }
}
