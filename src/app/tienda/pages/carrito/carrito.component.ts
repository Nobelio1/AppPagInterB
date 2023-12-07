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
  public precioTotal: number = 0;
  public avisoCompra: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listaProductos = JSON.parse(localStorage['carrito']);
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
