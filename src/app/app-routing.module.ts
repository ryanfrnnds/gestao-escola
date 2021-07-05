import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rotas } from '@enums';

const routes: Routes = [
  {
    path: 'estudantes',
    children: [
      {
        path: '',
        canActivate: [],
        loadChildren: () =>
          import(
            './paginas/estudante/estudante.module'
          ).then((m) => m.EstudanteModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: Rotas.ESTUDANTES.listagem,
    pathMatch: 'full',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
