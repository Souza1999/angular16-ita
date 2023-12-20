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
  
  constructor() {}

  ngOnInit(): void {
    
  }

  // Descobri que o import automático é ctrl + .
  editar(pedido: Pedido): void{
    pedido.nome += " Alterado";
  }
}
