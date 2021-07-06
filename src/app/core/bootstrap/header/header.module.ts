import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import {MenubarModule} from 'primeng/menubar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [HeaderComponent],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
