import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { global } from '../services/global';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private _ls: LoaderService) {

  }

  Mostrar(n: any) {
    if (n == 2) {
      this._ls.signal.emit(true);
    } else {
      global.messagePopup("Proyecto Final", "Entregas programadas parciales.", "success","Continuar");
      
    }
  }
}
