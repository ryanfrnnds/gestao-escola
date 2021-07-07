import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EstudanteRoutingModule } from './estudante-routing.module';
import { EstudanteComponent } from './estudante.component';
import { FiltroComponent } from './filtro/filtro.component';
import { TabelaComponent } from './tabela/tabela.component';

import {CardModule} from 'primeng-lts/card';
import { ButtonModule } from 'primeng-lts/button';
import { TableModule } from 'primeng-lts/table';
import {DropdownModule} from 'primeng-lts/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { EdicaoComponent } from './edicao/edicao.component';
import { InputTextModule } from 'primeng-lts/inputtext';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';


@NgModule({
  declarations: [
    EstudanteComponent,
    FiltroComponent,
    TabelaComponent,
    EdicaoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    DropdownModule,
    ButtonModule,
    TableModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,

    EstudanteRoutingModule
  ]
})
export class EstudanteModule { }
