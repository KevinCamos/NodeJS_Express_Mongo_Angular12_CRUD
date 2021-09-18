import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss'],
})
export class CreateProductsComponent implements OnInit {
  productForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _productService: ProductService,
    // private toastr:ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id'); //obtiene la 'id' del link
  }

  ngOnInit(): void {
    this.isUpdate();
  }

  addProduct() {
    console.log();
    const PRODUCT: Product = {
      nombre: this.productForm.get('product')?.value,
      categoria: this.productForm.get('category')?.value,
      ubicacion: this.productForm.get('location')?.value,
      precio: this.productForm.get('price')?.value,
    };
    if (this.id !== null) {
      console.log(this.id);

      this._productService.updateProduct(this.id, PRODUCT).subscribe(
        (data) => {
          console.table(data);

          // this.toastr.info(
          //   'El producto fue actualizado con éxito',
          //   'Producto Actualizado!'
          // );
          alert('producto Actualizado'),
            this.router.navigate(['/list-products']);
        },
        (error) => {
          console.log(error);
          this.productForm.reset(); //reinicia el formulario
        }
      );
    } else {
      this._productService.saveProduct(PRODUCT).subscribe(
        (data) => {
          console.log(data);

          // this.toastr.succes(
          //   'El producto fue registrado con éxito',
          //   'Producto Registrado!'
          // );
          this.router.navigate(['/list-products']);
        },
        (error) => {
          console.log(error);
          this.productForm.reset();
        }
      );
    }
  }

  isUpdate() {
    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._productService.getProduct(this.id).subscribe((data) => {
        this.productForm.setValue({
          product: data.nombre,
          category: data.categoria,
          location: data.ubicacion,
          price: data.precio,
        });
      });
    }
  }
}
