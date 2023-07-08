import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
   public isBooleanVariable: boolean = false;
   navActive(){
      this.isBooleanVariable = true;
   }
}
