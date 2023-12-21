import { Component, OnInit } from '@angular/core';
import { PEDIDOS } from 'src/app/shared/model/PEDIDOS';
import { Pedido } from 'src/app/shared/model/pedido';

@Component({
  selector: 'app-listagem-pedido',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  pedidos = PEDIDOS;

  titulo = "Listagem de Pedidos";
  
  constructor() {}

  ngOnInit(): void {
    
  }

  // Descobri que o import automático é ctrl + .
  editar(pedido: Pedido): void{
    pedido.nome += " Alterado";
  }

  remover(pedido: Pedido): void{
    // Poderia fazer com o nome também, mas depois faço isso.
    const indxPedidoARemover = this.pedidos.findIndex(p => p.id === pedido.id)
    
    if (indxPedidoARemover > -1){
      this.pedidos.splice(indxPedidoARemover, 1); //Isso ficou meio estranho, mas nas férias vejo como melhorar.
    }
  }
}
