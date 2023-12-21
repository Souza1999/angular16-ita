import { Component, OnInit } from '@angular/core';
import {Pedido} from 'src/app/shared/model/pedido'; //tive que importar isso aqui porque continuava com o erro, mas o professor não mostrou isso no vídeo
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.scss']
})
export class CadastroPedidoComponent implements OnInit {
  
  pedido: Pedido;

  constructor(private pedidoService: PedidoService){
    this.pedido = new Pedido();
  }

  ngOnInit(): void {
    
  }

  inserirPedido(): void {
    this.pedidoService.inserir(this.pedido).subscribe(p => console.log(`O pedido ${p} foi cadastrado!!!`));
    console.log("Enviado com sucesso!")
    this.pedido = new Pedido();
  }
}

