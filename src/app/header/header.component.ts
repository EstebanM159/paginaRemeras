import { Component,Input, OnInit } from '@angular/core';
import { NavComponent} from '../nav/nav.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
   estadoBandera = false;

  BanderaCambiada(valorBandera: boolean) {
    this.estadoBandera = valorBandera;
  }

}
