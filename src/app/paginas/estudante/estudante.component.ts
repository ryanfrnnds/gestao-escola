import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classe, Estudante, EstudanteFiltro, Serie } from '@entidade';
import { ClasseService, SerieService } from '@services';
import { ToastrService } from 'src/app/core/toastr';
import { EstudanteService } from './estudante.service';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.scss'],
  providers: [EstudanteService]
})
export class EstudanteComponent implements OnInit {

  public formulario: FormGroup;
  public series: Array<Serie>;
  public classes: Array<Classe>;
  public estudantes: Array<Estudante>;

  constructor(private service: EstudanteService, private formBuilder: FormBuilder, private route: ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.criarFormulario();

    this.series = this.route.snapshot.data.series;
    this.classes = this.route.snapshot.data.classes;

    this.pesquisar();
  }


  private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			serie: [null],
      classe: [null]
		});
	}

  public limpar(): void {
		this.formulario.reset();
	}

  public pesquisar(): void {
    const filtro = new EstudanteFiltro(this.formulario.getRawValue());

		this.service.buscar(filtro).subscribe(estudantesBDMemory => {
      const nenhumRegistroEncontrado = !(estudantesBDMemory.length > 0);
      if (nenhumRegistroEncontrado) {
        this.toastrService.info('Nenhum registro encontrado');
      }
      const estudantes = new Array<Estudante>();
      estudantesBDMemory.forEach(estudanteBDMemory => {
        const estudante = new Estudante(estudanteBDMemory, this.classes, this.series);
        estudantes.push(estudante);
      });
      this.estudantes = estudantes;
    });
	}

}
