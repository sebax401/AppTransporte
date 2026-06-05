import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'datos-vehiculo/:id',
    loadComponent: () => import('./datos-vehiculo/datos-vehiculo.page').then( m => m.DatosVehiculoPage)
  },
  {
    path: 'agregar-vehiculo',
    loadComponent: () => import('./agregar-vehiculo/agregar-vehiculo.page').then( m => m.AgregarVehiculoPage)
  },
];
