import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudanteRoutingModule } from './estudante-routing.module';
import { EstudanteComponent } from './estudante.component';
import { FiltroComponent } from './filtro/filtro.component';
import { TabelaComponent } from './tabela/tabela.component';


@NgModule({
  declarations: [
    EstudanteComponent,
    FiltroComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    EstudanteRoutingModule
  ]
})
export class EstudanteModule { }
