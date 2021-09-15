import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/producto.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})

export class ListProductsComponent implements OnInit {
  listProductos: Product[] = [];

  constructor( private _productoService: ProductService
    // ,               private toastr: ToastrServic
            ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  // eliminarProducto(id: any) {
  //   this._productoService.eliminarProducto(id).subscribe(data =>{
  //     // this.toastr.error('El producto fue eliminado con éxito', 'Producto eliminado');
  //     alert("Producto eliminado")
  //     this.obtenerProductos();
  //   }, error => {
  //     console.table(error);
  //   })
  // }

}
