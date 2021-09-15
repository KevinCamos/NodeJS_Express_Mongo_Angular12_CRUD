import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

    getProductos(): Observable<any> {
      return this.http.get(environment.url);
    }

    eliminarProducto(id: string):Observable<any> {
      return this.http.delete(environment.url + id);
    }

    guardarProducto(product: Product):Observable<any> {
      return this.http.post(environment.url, product);
    }

    obtenerProducto(id: string):Observable<any> {
      return this.http.get(environment.url + id);
    }

    editarProducto(id: string, product: Product):Observable<any> {
      return this.http.put(environment.url + id, product);
    }

  }
