import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaProductos } from '../../interfaces/tienda.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent implements OnInit {
  @Input()
  public lista!: ListaProductos;
  public listaCarrito: ListaProductos[] = [];

  @Output()
  public producto: EventEmitter<ListaProductos> = new EventEmitter();

  ngOnInit(): void {
    if (!this.lista) throw Error('lista property is required');
  }

  guardarCarrito(lista: ListaProductos) {
    this.producto.emit(lista);
    // localStorage.setItem('carrito', JSON.stringify(lista));
  }
}
