import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoClass  } from '././models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url='../assets/productos.json'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get<ProductoClass[]>(`${this.url}`);

  }





}
