import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudante, EstudanteFiltro } from '@entidade';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudante-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent implements OnInit {

  @Input()
	public idEstudante: number = 1;

  public formulario: FormGroup;


  constructor(private formBuilder: FormBuilder, private estudanteService: EstudanteService) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.estudanteService.buscar(new EstudanteFiltro({id: this.idEstudante})).subscribe(estudantes => {
      this.formulario.patchValue(estudantes[0]);
    })
  }

  private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			nome: [null],
		});
	}

}
