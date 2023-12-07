import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'principal', component: PrincipalComponent },
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'detalle/:id', component: ProductoDetalleComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: '**', redirectTo: 'principal' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaRoutingModule {}
