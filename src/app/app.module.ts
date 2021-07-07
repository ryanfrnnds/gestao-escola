import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BootstrapModule } from './core/bootstrap/bootstrap.module';
import { LoadingInterceptor } from './core/interceptors';
import { DataService } from './core/angular-in-memory-web-api/data.service';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ToastrModule } from './core/toastr/toastr.module';
import { ConfirmationService } from 'primeng-lts/api';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BootstrapModule,
    ToastrModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
     {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
