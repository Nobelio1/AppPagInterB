import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SiderbarComponent,
    CardProductComponent,
    PrincipalComponent,
    CatalogoComponent,
    ProductoDetalleComponent,
    CarritoComponent,
    LayoutPageComponent,
  ],
  imports: [CommonModule, TiendaRoutingModule, ReactiveFormsModule],
})
export class TiendaModule {}
