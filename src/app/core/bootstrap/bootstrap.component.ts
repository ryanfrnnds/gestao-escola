import { Component, OnInit } from '@angular/core';
import { LoadService } from '@services';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {

  public mostrarLoading = true;

  constructor(public loadService: LoadService) { }

  ngOnInit() {}
}
