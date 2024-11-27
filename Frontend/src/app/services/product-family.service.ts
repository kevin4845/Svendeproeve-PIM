import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProductFamily } from '../models/product-family';

@Injectable({
  providedIn: 'root'
})
export class ProductFamilyService {

  constructor(private http: HttpClient) { }

  getProductFamilies() {
    return this.http.get<ProductFamily[]>(`${environment.apiUrl}product-families`);
  }

  addProductFamily(form: FormData) {
    return this.http.post(`${environment.apiUrl}product-families`, form);
  }

  updateProductFamily(form: FormData, product_family_id: number) {
    return this.http.post(`${environment.apiUrl}product-families/${product_family_id}`, form);
  }

  deleteProductFamily(productFamilyId: number) {
    return this.http.delete(`${environment.apiUrl}product-families/${productFamilyId}`);
  }

}
