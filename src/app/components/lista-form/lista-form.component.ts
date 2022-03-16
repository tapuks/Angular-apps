import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista-form',
  templateUrl: './lista-form.component.html',
  styleUrls: ['./lista-form.component.css']
})
export class ListaFormComponent implements OnInit {

  @Input() tareas: Tarea[]

    constructor() {
      this.tareas=[]
    }

  ngOnInit(): void {
  }

  mostrarTareas(){
    let resultado = '<ul>'
    for (let tarea of this.tareas) {
      resultado += `<li>${tarea.titulo} - ${tarea.descripcion}</li>`
    }
    resultado += '</ul>'
    return resultado
  }

  onClick(pTarea: Tarea){
    pTarea.completa = !pTarea.completa
  }

  onClickBorrar(indice:number) {
    this.tareas.splice(indice,1)
  }
}
