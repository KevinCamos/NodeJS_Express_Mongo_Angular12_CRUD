export class Product {
  _id?: number;
  name: string;
  id_category: number;
  location: string;
  price: number;
  view?: number;
  id_user?:string;


  constructor(
    _id: number,
    name: string,
    id_category: number,
    location: string,
    price: number,
    view?: number,
    id_user?:string,

  ) {
    this.name = name;
    this.id_category = id_category;
    this.location = location;
    this.price = price;
    this.view = view ? view : 0;
    this.id_user = id_user ? id_user : "undefined";

  }
}
