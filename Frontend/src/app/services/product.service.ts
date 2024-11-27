import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${environment.apiUrl}products`);
  }

  addProduct(product: Product) {
    return this.http.post(`${environment.apiUrl}products`, product);
  }

  updateProduct(product: Product) {
    return this.http.put(`${environment.apiUrl}products/${product.id}`, product);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${environment.apiUrl}products/${productId}`);
  }

}