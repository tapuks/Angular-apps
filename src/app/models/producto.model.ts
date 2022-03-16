export class Producto {
  nombre: string;
  imagen: string;
  precio: number;
  cantidad: number;

  constructor(pNombre: string, Pimagen: string, pPrecio: number) {
    this.nombre=pNombre
    this.imagen=Pimagen;
    this.precio=pPrecio;
    this.cantidad=0;
  }
}
