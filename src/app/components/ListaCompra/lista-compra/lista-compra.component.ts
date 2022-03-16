import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cosa } from 'src/app/models/cosa.model';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {
  @Input() productoRecibido: Cosa[];
  @Output() productoSeleccionado: EventEmitter<number>;

  constructor() {
    this.productoRecibido =[]
    this.productoSeleccionado = new EventEmitter()
   }

  ngOnInit(): void {
  }

  onClick(indice:number) {
    this.productoSeleccionado.emit(indice)
  }


}
