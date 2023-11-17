import { Component, OnInit } from '@angular/core';
import { PEDIDOS } from 'src/app/shared/model/PEDIDOS';
import {Pedido} from 'src/app/shared/model/pedido'; //tive que importar isso aqui porque continuava com o erro, mas o professor não mostrou isso no vídeo

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.scss']
})
export class CadastroPedidoComponent implements OnInit {
  
  pedido: Pedido;
  pedidos: Array<Pedido>;

  constructor(){
    this.pedido = new Pedido();
    //this.pedidos = new Array<Pedido>();
    this.pedidos = PEDIDOS;
  }

  ngOnInit(): void {
    
  }

  enviarPedido(): void {
    this.pedidos.push(this.pedido);
    console.log("Enviado com sucesso!")
    this.pedido = new Pedido();
  }
}

