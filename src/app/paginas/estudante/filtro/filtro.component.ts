import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Serie } from '@entidade';
import { FormUtil } from '@util';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  @Input()
	public formulario: FormGroup;

  @Input()
  public series = new Array<Serie>();

  @Output()
	private aoPesquisar = new EventEmitter();

	@Output()
	private aoLimpar = new EventEmitter();

  @Output()
	private aoBuscarSerie = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.series);
  }

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

  public buscarSeries(event: any): void {
    this.aoBuscarSerie.emit(event);
  }

    public teste(event: any): void {
      this.aoLimpar.emit();
    }
}
