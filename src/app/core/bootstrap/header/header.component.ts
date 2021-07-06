import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {

  public items:  Array<MenuItem> = new Array<MenuItem>();

  constructor(public service: HeaderService) {}

  ngOnInit(): void {
    this.items = [
      {
          label:'Estudante',
          icon:'pi pi-fw pi-user'
      },
      {
        label:'Parte 2',
        icon:'pi pi-fw pi-power-off'
    }
  ];
  }

  public fazerResponsivo(){
    console.log('Num fui atraz das logo e nem de redesenhar o tamanho!!!!');

  }
  public exibeMenu(){
    console.log('Exiber algum MENU!!!');
  }
}
