import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path:'main',
    loadComponent: ()=> import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then( m => m.ProductListPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'ingresar',
    loadComponent: () => import('./ingresar/ingresar.page').then( m => m.IngresarPage)
  },
  {
    path: 'portada',
    loadComponent: () => import('./portada/portada.page').then( m => m.PortadaPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  /* {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  } */
];
