import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tenho que importar manualmente os componentes da rota, porque a IDE não fez isso.
import { CadastroPedidoComponent } from "./pedido/cadastro-pedido/cadastro-pedido.component";
import { ListagemPedidoComponent } from "./pedido/listagem-pedido/listagem-pedido.component";

const routes: Routes = [
  {
    path: 'cadastro-pedido',
    component: CadastroPedidoComponent
  },
  {
    path: 'lista-pedido/:id',
    component: ListagemPedidoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
