import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '@entidade';
import { ClasseService, SerieService } from '@services';
import { ObjectUtil } from '@util';
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

  constructor(private formBuilder: FormBuilder, private serieService:SerieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.criarFormulario();

    this.series = this.route.snapshot.data.series;
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
