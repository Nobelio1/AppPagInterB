import { Component, OnInit } from '@angular/core';
import { ListaProductos } from '../../interfaces/tienda.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  public listaProductos: ListaProductos[] = [];
  public listaProductos1: ListaProductos[] = [];
  public listaProductos2: ListaProductos[] = [];
  public precioTotal: number = 0;
  public avisoCompra: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const carritoString1 = localStorage['carrito'];
    const carritoString2 = localStorage['carrito2'];

    if (carritoString1) {
      this.listaProductos1 = JSON.parse(carritoString1);
    } else {
      this.listaProductos1 = [];
    }

    if (carritoString2) {
      this.listaProductos2 = JSON.parse(carritoString2);
    } else {
      this.listaProductos2 = [];
    }

    if (this.listaProductos1 && this.listaProductos2) {
      this.listaProductos = this.listaProductos1.concat(this.listaProductos2);
    } else {
    }

    console.log(this.listaProductos);
    this.pTotal();
  }

  pTotal() {
    this.listaProductos.forEach((item) => {
      this.precioTotal += item.precio;
    });
  }

  comprar() {
    localStorage.clear();
    this.router.navigate(['/tienda/catalogo']);
  }
}
