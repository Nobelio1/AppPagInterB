import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoAdd } from '../../interfaces/tienda.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent implements OnInit {
  @Input()
  public producto!: ProductoAdd;

  @Output()
  public productoId: EventEmitter<ProductoAdd> = new EventEmitter();

  ngOnInit(): void {
    if (!this.producto) throw Error('lista property is required');
  }

  guardarCarrito(producto: ProductoAdd) {
    this.productoId.emit(producto);
    // localStorage.setItem('carrito', JSON.stringify(lista));
  }
}
