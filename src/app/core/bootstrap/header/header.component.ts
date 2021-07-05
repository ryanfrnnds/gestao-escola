import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  constructor(public service: HeaderService) {}

  ngOnInit(): void {}

  public fazerResponsivo(){
    console.log('Num fui atraz das logo e nem de redesenhar o tamanho!!!!');

  }
  public exibeMenu(){
    console.log('Exiber algum MENU!!!');
  }
}
