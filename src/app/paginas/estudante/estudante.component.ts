import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classe, Estudante, EstudanteBDMemory, EstudanteFiltro, Serie } from '@entidade';
import { ClasseService, SerieService } from '@services';
import { forkJoin } from 'rxjs';
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

  constructor(private service: EstudanteService, private classeService: ClasseService, private serieService: SerieService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

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
    const estudantes: Array<Estudante> = [];
		this.service.buscar(new EstudanteFiltro(this.formulario.getRawValue())).subscribe(estudantesBDMemory => {
      const estudantes = new Array<Estudante>();
      estudantesBDMemory.forEach(estudanteBDMemory => {
        const estudante = new Estudante(estudanteBDMemory);
        estudante.classe = this.classes.filter(classe => classe.id == estudanteBDMemory.classeId)[0];
        estudante.serie = this.series.filter(serie => serie.id == estudanteBDMemory.serieId)[0];
        estudantes.push(estudante);
      });
      this.estudantes = estudantes;
    });
	}

}
