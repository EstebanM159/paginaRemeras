import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  url='http://localhost/remeras/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {


    return this.http.get(`${this.url}recuperartodos.php`);

  }


  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${id}`);
  }


}
