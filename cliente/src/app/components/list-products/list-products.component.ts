import { Component, OnInit } from '@angular/core';
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
