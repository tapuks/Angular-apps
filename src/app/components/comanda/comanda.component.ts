import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  @Input() listaProductos:Producto[]

  constructor() {
    this.listaProductos=[]
  }

  ngOnInit(): void {
  }

  precioTotal() {
    let resultado = 0
    for (let producto of this.listaProductos){
      resultado += producto.precio * producto.cantidad;
    }
    return resultado
  }

  onClick(indice: number) {
    if (this.listaProductos[indice].cantidad ==1) {
      this.listaProductos.splice(indice, 1)
    }
    else {
    this.listaProductos[indice].cantidad--
    }
  }

}
