import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Cosa } from 'src/app/models/cosa.model';

@Component({
  selector: 'app-formulario-lista',
  templateUrl: './formulario-lista.component.html',
  styleUrls: ['./formulario-lista.component.css']
})
export class FormularioListaComponent implements OnInit {

  nuevaCosa:Cosa;
  @Output() productoCreado: EventEmitter<Cosa>;

  constructor() {
    this.nuevaCosa= new Cosa();
    this.productoCreado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.productoCreado.emit(this.nuevaCosa)
    this.nuevaCosa= new Cosa()
  }

}
