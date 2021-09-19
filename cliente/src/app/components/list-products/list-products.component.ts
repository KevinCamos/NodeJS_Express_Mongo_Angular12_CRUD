import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];
  dictionaryCategory: { [key: number]: string } = { // Vore de com fer una variable única
    0: 'Otros',
    1: 'Electrónicos',
    2: 'Música',
    3: 'Informática',
    4: 'Hogar',
    5: 'Libros',
  };

  faTrash = faTrash;
  faPlus = faPlus;
  faEdit = faEdit;
  constructor(
    private _productoService: ProductService // ,               private toastr: ToastrServic
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productoService.getProducts().subscribe(
      (data) => {
        console.log(data);

        for (let product in data) {
         data[product].price=new Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' }).format( data[product].price);
        }
        this.listProducts = data; //ListProducts es un objeto Product[]
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProduct(id: any) {
    this._productoService.deleteProduct(id).subscribe(
      (data) => {
        // this.toastr.error('El producto fue eliminado con éxito', 'Producto eliminado');
        alert('Producto eliminado');
        this.getProducts();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
