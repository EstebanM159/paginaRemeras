import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  @Input() id:number=0;
  @Input() precio: number=0;
  @Input() descripcion: string="";



  constructor() { }

  ngOnInit() {
  }
}
