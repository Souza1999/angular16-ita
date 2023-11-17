import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ListagemPedidoComponent } from './listagem-pedido/listagem-pedido.component';


@NgModule({
  declarations: [
    CadastroPedidoComponent,
    ListagemPedidoComponent,
  ],

  exports: [
    CadastroPedidoComponent
  ],

  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class PedidoModule { }
