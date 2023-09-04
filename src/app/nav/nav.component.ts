import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
    open:boolean=false;
   public isBooleanVariable: boolean = false;
   navActive(){
      this.isBooleanVariable = true;

    }

  abrir(){
    if(!this.open){
      this.open=true;
    }else{
      this.open=false;
    }
  }
  }

