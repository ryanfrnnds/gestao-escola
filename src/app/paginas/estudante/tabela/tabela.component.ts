import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Estudante } from '@entidade';
import { ClasseService } from '@services';
import { ObjectUtil } from '@util';
import { Table } from 'primeng-lts/table';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudante-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  public colunas: Array<{field: string, header:string}>;

  @ViewChild('tabela', {static: true}) tabela: Table;

  @Input()
	public estudantes = new Array<Estudante>();

  @Output()
	public aoEditar = new EventEmitter();

  @Output()
	public aoRemover = new EventEmitter();

  constructor( private estudanteService:EstudanteService) { }

  ngOnInit(): void {
    this.constuirColunas();

    this.estudanteService.pesquisarObservable.subscribe(ehPesquisar => {
      if(ehPesquisar) {
        this.tabela.reset();
      }
    });
  }

  public buscarValor(item: any) {
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
