import { Component, OnInit } from '@angular/core';
import {
  ProductoCarrito,
  ProductoAdd,
} from '../../interfaces/tienda.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  public listaProductos: ProductoAdd[] = [];
  public listaProductos1: ProductoAdd[] = [];
  public listaProductos2: ProductoAdd[] = [];
  public listaProductosCarrito: ProductoCarrito[] = [];
  public precioTotal: number = 0;
  public avisoCompra: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const carritoString1 = localStorage['carrito'];
    const carritoString2 = localStorage['carrito2'];
    const cantidadPorIdProducto = new Map<string, number>();

    if (carritoString1) {
      this.listaProductos1 = JSON.parse(carritoString1);

      this.listaProductosCarrito = this.listaProductos1.map((producto) => {
        const idProducto = producto.idProducto;
        const cantidadActual = cantidadPorIdProducto.get(idProducto) || 0;
        cantidadPorIdProducto.set(idProducto, cantidadActual + 1);

        // Crear un nuevo objeto ProductoConCantidad con la propiedad 'cantidad'
        const productoConCantidad: ProductoCarrito = {
          ...producto, // Copia todas las propiedades existentes del producto
          cantidad: cantidadActual + 1, // Agrega la propiedad 'cantidad'
        };

        return productoConCantidad;
      });

      this.listaProductos1.forEach((producto) => {
        const idProducto = producto.idProducto;

        const cantidadActual = cantidadPorIdProducto.get(idProducto) || 0;
        cantidadPorIdProducto.set(idProducto, cantidadActual + 1);
      });
      console.log('Contador de productos por ID:');
      cantidadPorIdProducto.forEach((cantidad, idProducto) => {
        console.log(`ID: ${idProducto}, Cantidad: ${cantidad}`);
      });
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
