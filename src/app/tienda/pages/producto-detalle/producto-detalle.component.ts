import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ListaProductos,
  ListaProductosDetalle,
} from '../../interfaces/tienda.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css',
})
export class ProductoDetalleComponent implements OnInit {
  public listaProductos!: ListaProductosDetalle;

  constructor(
    private tiendaService: TiendaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.tiendaService.listaDetalleProducto(id)))
      .subscribe((data) => {
        this.listaProductos = data;
      });
  }
}
