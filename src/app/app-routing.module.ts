import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages404Component } from './shared/pages404/pages404.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tienda',
    loadChildren: () =>
      import('./tienda/tienda.module').then((m) => m.TiendaModule),
  },
  {
    path: '404',
    component: Pages404Component,
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
