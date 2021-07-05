import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap.component';
import { HeaderModule } from './header/header.module';
import { LoadingComponent } from './loading/loading.component';




@NgModule({
  declarations: [
    BootstrapComponent, LoadingComponent
  ],
  imports: [
    CommonModule, HeaderModule
  ],
 
  exports: [BootstrapComponent, LoadingComponent]
})
export class BootstrapModule { }
