import { Component,Output,EventEmitter } from '@angular/core';

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

