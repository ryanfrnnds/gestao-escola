import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from '@entidade';
import { ClasseService } from '@services';
import { ObjectUtil } from '@util';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  public colunas: Array<{field: string, header:string}>;

  @Input()
	public estudantes = new Array<Estudante>();

  constructor( private classeService:ClasseService) { }

  ngOnInit(): void {
    this.constuirColunas();
  }

  public buscarValor(item: any) {
    // console.log(typeof item);
    if (typeof item == 'object') {
      return ObjectUtil.buscarValor(item, 'nome', '');
    }
    return item;
  }


  private constuirColunas(): void {
    this.colunas = [
      {
        field: 'ra',
        header: 'RA',
      },
      {
        field: 'nome',
        header: 'ALUNO',
      },
      {
        field: 'serie',
        header: 'SÉRIE',
      },
      {
        field: 'classe',
        header: 'CLASSE',
      },
      {
        field: '',
        header: 'AÇÕES',
      },
    ];
  }


}
