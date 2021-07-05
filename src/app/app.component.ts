import { Component, OnInit } from '@angular/core';
import { ClasseService } from './core/service/classe.service';
import { SerieService } from './core/service/serie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gestao-escola';

  constructor(private serieService: SerieService, private classeService: ClasseService){}

  ngOnInit() {}

}
