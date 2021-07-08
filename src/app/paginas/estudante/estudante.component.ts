import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classe, Estudante, EstudanteBDMemory, EstudanteFiltro, Serie } from '@entidade';
import { forkJoin } from 'rxjs';
import { ToastrService } from 'src/app/core/toastr';
import { EstudanteService } from './estudante.service';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.scss'],
  providers: [EstudanteService]
})
export class EstudanteComponent implements OnInit {

  data: any;

  public idEstudante: number;
  public mostrarFiltros = false;
  
  public formulario: FormGroup;
  public series: Array<Serie>;
  public classes: Array<Classe>;
  public estudantes: Array<Estudante>;

  constructor(private service: EstudanteService, private formBuilder: FormBuilder, private route: ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
     

    this.criarFormulario();

    this.series = this.route.snapshot.data.series;
    this.classes = this.route.snapshot.data.classes;
    this.service.subjectPesquisar.next(true);
    this.service.pesquisarObservable.subscribe(ehPesquisar => {
      if(ehPesquisar) {
        this.pesquisar();
        this.gerarGrafico();
      }
    })
  }
  private gerarGrafico() {
    const labels:Array<String> = [];
    const quantidadeAlunosPorSerie:Array<number> = [];
    let observables = [];
    this.series.forEach(serie => {
      labels.push(serie.nome);
      observables.push(this.service.buscar({id: serie.id}));
    });

    forkJoin(observables
    ).subscribe(forkJoin => {
      forkJoin.forEach((element:Array<EstudanteBDMemory>) => {
        quantidadeAlunosPorSerie.push(element.length);
      });
      this.data = {
        labels: labels,
        datasets: [
          {
              label: 'Alunos',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: quantidadeAlunosPorSerie
          }
        ]
      }
    });
  }

  public editar(item: Estudante) {
    this.idEstudante = item.id;
  }

  public salvar(item: Estudante) {
    this.esconderEdicao();
    this.service.editar(item)
      .subscribe({
        next: data => {
            this.toastrService.success('Registro salvo.');
            this.pesquisar();
        },
        error: error => {
            this.toastrService.error('Houve algum problema. Favor contate o suporte!');
        }
    });
  }

  public remover(item: any) {
    this.toastrService.info( JSON.stringify(item) ,'Not Implement - Excluir');
  }

  public esconderEdicao() {
    this.idEstudante = null;
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
