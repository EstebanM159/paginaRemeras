import { Component,Output,EventEmitter } from '@angular/core';
import { CarritoService } from '../carrito.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() banderaCambiada = new EventEmitter<boolean>();
  public isBooleanVariable: boolean = false;
  open:boolean=false;
  banderaDisabled = false;

  constructor(private carritoService:CarritoService){

  }
  cerrarTodo(){
    this.banderaDisabled=false;
    this.banderaCambiada.emit(this.banderaDisabled);
    if(this.open){
      this.open=!this.open;
    }
  }
  alternarBandera() {
    this.banderaDisabled = !this.banderaDisabled;
    this.banderaCambiada.emit(this.banderaDisabled);
    if(this.open){
      this.open=!this.open;
    }
  }
    public abrir(){
        this.banderaCambiada.emit(this.banderaDisabled=false)
        this.open=!this.open;
    }


  }

