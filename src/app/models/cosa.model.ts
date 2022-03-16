export class Cosa {
  nombre: string;
  cantidad: number;
  departamento: string;

  constructor(cNombre: string="", cCantidad: number=0, cDepartamento: string="") {
    this.nombre = cNombre;
    this.cantidad = cCantidad;
    this.departamento = cDepartamento;
  }
}
