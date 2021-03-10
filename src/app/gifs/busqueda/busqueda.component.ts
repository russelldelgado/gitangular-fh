import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; // ! <-- esto indica que no sera nulo es como el --> ? en flutter


  constructor(private gitsService :GifsService) { }


  buscar(){
    const valor : string =  this.txtBuscar.nativeElement.value;
    if(valor.trim().length == 0 )return;
    this.gitsService.bucarGifs(valor);
    this.txtBuscar.nativeElement.value='';
  }
}
