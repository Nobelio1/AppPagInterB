import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CardDetalleComponent } from './components/card-detalle/card-detalle.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiderbarComponent,
    CardProductComponent,
    PrincipalComponent,
    CatalogoComponent,
    ProductoDetalleComponent,
    CardDetalleComponent,
    CarritoComponent,
    LayoutPageComponent,
  ],
  imports: [CommonModule, TiendaRoutingModule, PrimeNgModule],
})
export class TiendaModule {}
