export class Product {
  _id?: number;
  name: string;
  category: string;
  location: string;
  price: number;
  view?: number;

  constructor(
    _id: number,

    name: string,
    category: string,
    location: string,
    price: number,
    view?: number
  ) {
    this.name = name;
    this.category = category;
    this.location = location;
    this.price = price;
    this.view = view ? view : 0;
  }
}
