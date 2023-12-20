import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { PedidoModule } from './pedido/pedido.module';
// Rotas
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//Layout
import { LayoutModule } from './layout/layout.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    PedidoModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    MatGridListModule,  // Fiquei apanhando nisso, igual da vez que fiz na sala e o professor veio me ajudar, mas ele também demorou pra entender. Ou seja, tenho que  ficar mais atento a isso.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
