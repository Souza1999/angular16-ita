import { Component } from '@angular/core';
import { Pedido } from 'src/app/shared/model/pedido';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulozinho = 'I Take Away';
  descricao = 'Faça seu pedido!';
  pedido: Pedido;
  pedidos: Array<Pedido>;

  constructor(){
    this.pedido = new Pedido();
    this.pedidos = new Array<Pedido>();
  }

  enviarPedido(): void {
    this.pedidos.push(this.pedido);
    console.log("Enviado com sucesso!")
    this.pedido = new Pedido();
  }
}
