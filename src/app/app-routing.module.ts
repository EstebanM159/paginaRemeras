import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos/productos.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { MostrarProductoComponent } from './productos/mostrar-producto/mostrar-producto.component';
import { ContactoComponent } from './contacto/contacto.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'productos',
    pathMatch:'full'
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'sobrenosotros',
    component:SobrenosotrosComponent
  },
  {
    path:'mostrar-producto/:id',
    component:MostrarProductoComponent
  },
  {
    path:'mostrar-producto',
    component:MostrarProductoComponent
  },{
    path:'contacto',
    component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
