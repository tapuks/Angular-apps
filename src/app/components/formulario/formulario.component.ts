import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() tareaCreada: EventEmitter<Tarea>

  nuevaTarea : Tarea
  constructor() {

    this.tareaCreada= new EventEmitter()

    this.nuevaTarea= new Tarea()
   }

  ngOnInit(): void {
  }
  onClick() {
    this.tareaCreada.emit(this.nuevaTarea)
    this.nuevaTarea = new Tarea()

  }

}
