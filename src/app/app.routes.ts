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
    path: 'datos-vehiculo',
    loadComponent: () => import('./datos-vehiculo/datos-vehiculo.page').then( m => m.DatosVehiculoPage)
  },
];
