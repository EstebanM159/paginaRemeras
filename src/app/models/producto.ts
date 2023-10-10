  export class ProductoClass {
  public id!: number;
  public nombre!:string;
  public descripcion!: string;
  public precio !: number;
  public img !:string;
  }

export class CarritoClass{//En un futuro se le podria agregar la descripcion
  public id!: number;
  public nombre!:string;
  public precio !: number;
  public img !: string;
  public talle !: string;
  public cantidad !: number;
  public total!:number;
}
