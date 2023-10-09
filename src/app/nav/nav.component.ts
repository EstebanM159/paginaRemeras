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

  alternarBandera() {
    this.banderaDisabled = !this.banderaDisabled;
    this.banderaCambiada.emit(this.banderaDisabled);
  }
  navActive(){
    this.isBooleanVariable = true;
  }


    public abrir(){
      if(!this.open){
        this.open=true;
      }else{
        this.open=false;
      }
    }
    cerrar(){
      this.open = false;
    }

  }

