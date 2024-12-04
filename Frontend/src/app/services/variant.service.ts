import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variant } from '../models/variant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VariantService {

  constructor(private http: HttpClient) { }

  getVariants() {
    return this.http.get<Variant[]>(`${environment.apiUrl}variants`);
  }

  addVariant(form: FormData) {
    return this.http.post(`${environment.apiUrl}variants`, form);
  }

  updateVariant(form: FormData, variantId: number) {
    return this.http.post(`${environment.apiUrl}variants/${variantId}`, form);
  }

  deleteVariant(variantId: number) {
    return this.http.delete(`${environment.apiUrl}variants/${variantId}`);
  }

}
