import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-pedido',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {
  pedidos = [
    {id: 1, nome: 'Adriano', descricao: '1 kg'},
    {id: 2, nome: 'Bianca', descricao: '2 kg'},
  ];
  
  constructor() {}

  ngOnInit(): void {
    
  }
}
