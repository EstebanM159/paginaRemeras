import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos/productos.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

const routes: Routes = [
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'sobrenosotros',
    component:SobrenosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
