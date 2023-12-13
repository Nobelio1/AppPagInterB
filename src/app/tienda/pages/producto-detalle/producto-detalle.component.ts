import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaProductosDetalle } from '../../interfaces/tienda.interface';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css',
})
export class ProductoDetalleComponent implements OnInit {
  public listaProductos!: ListaProductosDetalle;
  public listaProductosRelacionados: ListaProductosDetalle[] = [];
  public categoria!: string;

  constructor(
    private tiendaService: TiendaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.tiendaService.listaDetalleProducto(id)))
      .subscribe((data) => {
        this.listaProductos = data;
        this.categoria = data.categoria;
        this.getProductosRelacionados(this.categoria);
      });
  }

  getCarito(producto: ListaProductosDetalle) {
    const carritoExistente = localStorage.getItem('carrito2');

    if (carritoExistente) {
      const carritoActual = JSON.parse(carritoExistente);
      carritoActual.push(producto);
      localStorage.setItem('carrito2', JSON.stringify(carritoActual));
    } else {
      const nuevoCarrito = [producto];
      localStorage.setItem('carrito2', JSON.stringify(nuevoCarrito));
      console.log('Carrito creado con el producto');
    }
  }

  getProductosRelacionados(categoria: string) {
    this.tiendaService.listaProductos(categoria).subscribe((data) => {
      this.listaProductosRelacionados = data;
    });
  }

  producto(id: string) {
    this.router.navigate([`/tienda/detalle/${id}`]).then(() => {
      this.location.replaceState(`/tienda/detalle/${id}`);
      window.location.reload();
    });
  }
}
