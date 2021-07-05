import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './estudante.component';

const routes: Routes = [
  {
    path: '',
    component: EstudanteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudanteRoutingModule { }
