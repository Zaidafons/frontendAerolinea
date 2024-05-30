import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  //-----------------AEROLINIA---------------
   ///------------------------------RECETA INICIO
   {
    title: true,
    name: 'indice de Aeriolinea'
  },
 {
    name: 'AEROLINEA',
    url: '/aerolinea',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Registro Pasaje',
        url: '/aerolinea/pasaje',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Pasajes',
        url: '/aerolinea/lista',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Reporte 1',
        url: '/reportes/reporte1',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Reporte 2',
        url: '/reportes/reporte2',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  ///------------------------------RECETA FINAL
 //-----------------AEROLINIA---------------

  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
 
    ]
  },

];
