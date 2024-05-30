import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pasajes'
    },
    children: [
      {
        path: '',
        redirectTo: 'pasaje',
        pathMatch: 'full'
      },
      {
        path: 'pasaje',
        loadComponent: () => import('./pasaje/pasaje.component').then(m => m.PasajeComponent),
        data: {
          title: 'Pasajes'
        }
      },
      {
        path: 'lista',
        loadComponent: () => import('./lista/lista.component').then(m => m.ListaComponent),
        data: {
          title: 'Lista'
        }
      },
     /* {
        path: 'reporte1',
        loadComponent: () => import('./reporte1/reporte1.component').then(m => m.Reporte1Component),
        data: {
          title: 'Reporte1'
        }
      },
      {
        path: 'reporte2',
        loadComponent: () => import('./reporte2/reporte2.component').then(m => m.Reporte2Component),
        data: {
          title: 'Reporte2'
        }
      },*/
    
    ]
  }
];
