import { Component, OnInit } from '@angular/core';
import { ListaProductos } from '../../interfaces/tienda.interface';
import { TiendaService } from '../../services/tienda.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  public listaProductos: ListaProductos[] = [];
  public listaCarrito: ListaProductos[] = [];

  public myForm: FormGroup = this.fb.group({
    categoria: [''],
    categoria1: [''],
    categoria2: [''],
  });

  constructor(private tiendaService: TiendaService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(e: string = 'Todo') {
    this.tiendaService.listaProductos(e).subscribe((data) => {
      this.listaProductos = data;
    });
  }

  getCarito(producto: ListaProductos) {
    const carritoExistente = localStorage.getItem('carrito');

    if (carritoExistente) {
      const carritoActual = JSON.parse(carritoExistente);
      carritoActual.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carritoActual));
    } else {
      const nuevoCarrito = [producto];
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    }
  }

  seleccionarCategoria(id: number) {
    if (this.myForm.controls['categoria'].value) {
      // switch (id) {
      //   case 1:
      //     this.getProducto('Hogar');
      //     break;
      //   case 2:
      //     this.getProducto('Electronica');
      //     break;
      //   case 3:
      //     this.getProducto('Salud');
      //     break;
      // }
      this.getProducto('Hogar');
    } else if (this.myForm.controls['categoria1'].value) {
      this.getProducto('Electronica');
    } else if (this.myForm.controls['categoria2'].value) {
      this.getProducto('Salud');
    } else if (
      this.myForm.controls['categoria1'].value &&
      this.myForm.controls['categoria2'].value
    ) {
      this.getProducto('Hogar,Electronica');
    } else if (
      this.myForm.controls['categoria1'].value &&
      this.myForm.controls['categoria3'].value
    ) {
      this.getProducto('Hogar,Salud');
    } else if (this.myForm.controls['categoria1'].value) {
    }
  }
}
