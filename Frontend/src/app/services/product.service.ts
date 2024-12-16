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

  addProduct(form: FormData) {
    return this.http.post(`${environment.apiUrl}products`, form);
  }

  updateProduct(form: FormData, productId: number) {
    return this.http.put(`${environment.apiUrl}products/${productId}`, form);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${environment.apiUrl}products/${productId}`);
  }

}
