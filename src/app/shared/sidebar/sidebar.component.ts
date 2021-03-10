import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){
    return this.gitsService.historial;
  }

  constructor(private gitsService : GifsService) { };


  buscar(item : string){
    console.log(item);
    this.gitsService.bucarGifs(item);
  }

}
