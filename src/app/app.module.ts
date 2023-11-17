import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // tive que colocar o formsmodule para que o ngModel lá no html funcionasse
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
