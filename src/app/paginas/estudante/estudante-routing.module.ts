import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieResolver } from '@resolver';
import { ClasseResolver } from 'src/app/core/resolver/classe.resolver';
import { EstudanteComponent } from './estudante.component';

const routes: Routes = [
  {
    path: '',
    component: EstudanteComponent,
     resolve: {
      series: SerieResolver,
      classes: ClasseResolver,
    },

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudanteRoutingModule { }
