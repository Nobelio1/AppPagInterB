import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import {
  ListaProductos,
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
  private user?: UsuarioIn;

  //todo: Realizar la validacion de session de usuario

  constructor(private http: HttpClient) {}

  loginUser(request: UsuarioIn): Observable<UsuarioOut> {
    return this.http.post<UsuarioOut>(
      `${this.urlService}/usuario/login`,
      request
    );
  }

  registerUsser(request: NuevoUsuarioIn): Observable<NuevoUsuarioOut> {
    return this.http.post<NuevoUsuarioOut>(
      `${this.urlService}/usuario`,
      request
    );
  }

  listaProductos(): Observable<ListaProductos[]> {
    return this.http.get<ListaProductos[]>(`${this.urlService}/producto`);
  }

  listaDetalleProducto(id: string): Observable<ListaProductosDetalle> {
    return this.http.get<ListaProductosDetalle>(
      `${this.urlService}/producto/id/${id}`
    );
  }
}
