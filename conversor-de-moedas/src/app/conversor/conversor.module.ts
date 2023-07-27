import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
import { MoedaService } from './services';
import { NumeroDirective } from './directives';
import { ModalContacaoComponent } from './utils';
import { DataBrPipe } from './pipes/data-br.pipe';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalContacaoComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService
  ]
})
export class ConversorModule { }
