import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL_PEDIDOS = 'http://localhost:3000/pedidos';

  constructor(private httpCLient: HttpClient) {

  }

  // Rapaz, tava dando tudo errado, mas pulei o vídeo e fui pra parte de Observable. Aí deu certo.
  listar(): Observable<Pedido[]>{
    return this.httpCLient.get<Pedido[]>(this.URL_PEDIDOS);
  }

  inserir(pedido: Pedido): Observable<Pedido>{
    return this.httpCLient.post<Pedido>(this.URL_PEDIDOS, pedido);
  }
}
