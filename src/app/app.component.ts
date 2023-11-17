import { Component } from '@angular/core';
import { Pedido } from 'src/shared/model/pedido';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulozinho = 'I Take Away';
  descricao = 'Faça seu pedido!';
  pedido_teste: Pedido;
  pedidos: Array<Pedido>;

  constructor(){
    this.pedido_teste = new Pedido();
    this.pedidos = new Array<Pedido>();
  }

  enviarPedido(): void {
    console.log("Enviado com sucesso!")
  }
}
