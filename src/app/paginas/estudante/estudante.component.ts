import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classe, Serie } from '@entidade';
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

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.criarFormulario();

    this.series = this.route.snapshot.data.series;
    this.classes = this.route.snapshot.data.classes;
    console.log(this.classes);
  }


  private criarFormulario(): void {
		this.formulario = this.formBuilder.group({
			serie: [null]
		});
	}

  public limpar(): void {
		this.formulario.reset();
	}

  public pesquisar(event = null): void {
		console.log(event);
	}

}
