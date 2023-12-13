import { Component, OnInit } from '@angular/core';
import { ProductoAdd } from '../../interfaces/tienda.interface';
import { TiendaService } from '../../services/tienda.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  public listaCategoria: string[] = [];

  public listaProductos: ProductoAdd[] = [];
  public listaCarrito: ProductoAdd[] = [];

  public myForm: FormGroup = this.fb.group({
    checkboxHogar: [''],
    checkboxElectro: [''],
    checkboxSalud: [''],
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

  getCarito(producto: ProductoAdd) {
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

  addArrayCategoria() {
    this.listaCategoria = [];
    if (this.myForm.controls['checkboxHogar'].value) {
      this.listaCategoria.push('Hogar');
    }
    if (this.myForm.controls['checkboxElectro'].value) {
      this.listaCategoria.push('Electronica');
    }
    if (this.myForm.controls['checkboxSalud'].value) {
      this.listaCategoria.push('Salud');
    }
    if (this.listaCategoria.length == 0) {
      this.listaCategoria.push('Todo');
    }

    console.log(this.listaCategoria.join());

    this.getProducto(this.listaCategoria.join());
  }
}
