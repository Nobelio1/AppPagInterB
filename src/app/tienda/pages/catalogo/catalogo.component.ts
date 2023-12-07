import { Component, OnInit } from '@angular/core';
import { ListaProductos } from '../../interfaces/tienda.interface';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  public listaProductos: ListaProductos[] = [];
  public listaCarrito: ListaProductos[] = [];
  constructor(private tiendaService: TiendaService) {}
  ngOnInit(): void {
    this.getProducto();
  }

  getProducto() {
    this.tiendaService.listaProductos().subscribe((data) => {
      this.listaProductos = data;
    });
  }

  getCarito(producto: ListaProductos) {
    this.listaCarrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.listaCarrito));
  }
}
