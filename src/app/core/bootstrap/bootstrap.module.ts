import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponent } from './bootstrap.component';
import { HeaderModule } from './header/header.module';
import { LoadingComponent } from './loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BootstrapComponent, LoadingComponent
  ],
  imports: [
    CommonModule, HeaderModule, ReactiveFormsModule
  ],
 
  exports: [BootstrapComponent, LoadingComponent]
})
export class BootstrapModule { }
