import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Classe, Estudante, EstudanteFiltro, Serie } from '@entidade';
import { CoreValidators, FormUtil } from '@util';
import { ToastrService } from 'src/app/core/toastr';
import { EstudanteService } from '../estudante.service';

import { ConfirmationService } from 'primeng-lts/api';

@Component({
  selector: 'app-estudante-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent implements OnInit {

  @Output()
	public aoCancelar = new EventEmitter();

  @Output()
	public aoSalvar = new EventEmitter<Estudante>();

  @Input()
	public idEstudante: number;

  @Input()
  public series = new Array<Serie>();

  @Input()
  public classes = new Array<Classe>();

  public formulario: FormGroup;


  constructor(private formBuilder: FormBuilder, private estudanteService: EstudanteService, private toastr: ToastrService, private confirmacaoService: ConfirmationService) { }

  ngOnInit(): void {
    const ehEdicao = this.idEstudante != null;
    this.criarFormulario();
    if(ehEdicao) {
      this.estudanteService.buscar(new EstudanteFiltro({id: this.idEstudante})).subscribe(estudantes => {
        const estudante = new Estudante(estudantes[0], this.classes, this.series);
        this.formulario.patchValue(estudantes[0]);
        // um 'BUG' que existe no componente do DropDown quando não se trabalha com SelectedItem que é o objeto que o Prime disponibiliza para trabalhar com itens de selecoes.
        // acontece que as refetencias do objeto do Estudante para o objeto que existe no DROPDOWN são outras então se eu não forcar a seleção dessa maneira o campo não vem preenchido.
        this.formulario.get('serie').setValue(this.series.filter(serie => serie.id == estudante.serie.id)[0]);
        this.formulario.get('classe').setValue(this.classes.filter(classe => classe.id == estudante.classe.id)[0]);
      })
    }
  }

  public salvar() {
     if (this.formulario.invalid) {
      this.toastr.warning('Favor preencher todos os campos obrigatórios');
      FormUtil.marcarComoTocado(this.formulario);
      return;
    }
    console.log('Cade o confirmDialog???');
    this.confirmacaoService.confirm({
      message: 'Tem certeza que deseja salvar?',
      header: 'Confirmação Salvar',
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO',
      accept: () => {
        const estudante = new Estudante();
        Object.assign(estudante,this.formulario.getRawValue());
        estudante.id = this.idEstudante;
        this.aoSalvar.emit(estudante);
      },
    });

  }

  private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			ra: [null, CoreValidators.required],
      nome: [null, CoreValidators.required],
      serie: [null, CoreValidators.required],
      classe: [null, CoreValidators.required],
		});
	}

}
