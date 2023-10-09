  export class ProductoClass {
  public id!: number;
  public nombre!:string;
  public descripcion!: string;
  public precio !: number;
  public img !:string;
  }

export interface CarritoClass{//En un futuro se le podria agregar la descripcion
  id: number;
  nombre:string;
  precio : number;
  img : string;
  talle : string;
  cantidad : number;

}
