export class Tarea {
  titulo: string;
  descripcion: string;
  completa: boolean;

  constructor(pTitulo='', pDesCripcion=''){
    this.titulo = pTitulo;
    this.descripcion = pDesCripcion;
    this.completa = false
  }
}
