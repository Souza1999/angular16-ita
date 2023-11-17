import { Component, OnInit } from '@angular/core';
import { PEDIDOS } from 'src/app/shared/model/PEDIDOS';

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
}
