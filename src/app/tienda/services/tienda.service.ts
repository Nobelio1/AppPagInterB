import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import {
  ProductoAdd,
  ListaProductosDetalle,
  NuevoUsuarioIn,
  NuevoUsuarioOut,
  UsuarioIn,
  UsuarioOut,
} from '../interfaces/tienda.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TiendaService {
  private urlService = environment.API_MASTER;

  constructor(private http: HttpClient) {}

  registerUsser(request: NuevoUsuarioIn): Observable<NuevoUsuarioOut> {
    return this.http.post<NuevoUsuarioOut>(
      `${this.urlService}/usuario`,
      request
    );
  }

  listaProductos(categoria?: string): Observable<ProductoAdd[]> {
    console.log('listaProductos-categoria: ' + categoria);
    return this.http.get<ProductoAdd[]>(
      `${this.urlService}/producto/categoria/${categoria}`
    );
  }

  listaDetalleProducto(id: string): Observable<ListaProductosDetalle> {
    return this.http.get<ListaProductosDetalle>(
      `${this.urlService}/producto/id/${id}`
    );
  }
}
