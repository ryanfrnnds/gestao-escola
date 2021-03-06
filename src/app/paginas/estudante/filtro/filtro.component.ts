import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Classe, Serie } from '@entidade';
import { FormUtil } from '@util';

@Component({
  selector: 'app-estudante-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  @Input()
	public formulario: FormGroup;

  @Input()
  public series = new Array<Serie>();

  @Input()
  public classes = new Array<Classe>();

  @Output()
	private aoPesquisar = new EventEmitter();

	@Output()
	private aoLimpar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  public pesquisar(): void {
    if (this.formulario.invalid) {
      FormUtil.marcarComoTocado(this.formulario);
      return
    }
		this.aoPesquisar.emit();
	}

	public limpar(): void {
		this.aoLimpar.emit();
	}

}
