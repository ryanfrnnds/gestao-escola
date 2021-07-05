import { Component, OnInit } from '@angular/core';
import { ClasseService } from '@services';
import { EstudanteService } from './estudante.service';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.scss'],
  providers: [EstudanteService]
})
export class EstudanteComponent implements OnInit {

  constructor(private classeService:ClasseService) { }

  ngOnInit(): void {

    this.classeService.buscarSeries().subscribe(series => {
      console.log(series);
    });
  }

}
