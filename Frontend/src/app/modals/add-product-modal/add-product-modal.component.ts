import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { ProductFamily } from '../../models/product-family';
import { ProductFamilyService } from '../../services/product-family.service';
import { ProductService } from '../../services/product.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrl: './add-product-modal.component.scss'
})
export class AddProductModalComponent {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private productFamilyService: ProductFamilyService,
    private productService: ProductService,
    private dialogRef: DynamicDialogRef
  ) { }

  form: any = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    base_price: [0, Validators.required],
  });

  name: string = '';
  description: string = '';
  base_price: number = 0;
  product_family_id: number = 0;

  files: any[] = [];

  productFamilies$: Observable<ProductFamily[]> = this.getProductFamilies();
  productFamilies: ProductFamily[] = [];

  formData: FormData = new FormData();

  addProduct() {

    this.formData.set('name', this.name);
    this.formData.set('description', this.description);
    this.formData.set('base_price', this.base_price.toString());
    this.formData.set('product_family_id', this.product_family_id.toString());
    this.formData.set('image', this.files[0]);
    this.productService.addProduct(this.formData).subscribe((res: any) => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  getProductFamilies(): Observable<ProductFamily[]> {
    return this.productFamilies$ = this.productFamilyService.getProductFamilies().pipe(tap(res => {
      this.productFamilies = res;
    }));
  }

  onProductFamilyChange(event: any) {
    this.product_family_id = event.value;
  }

  onSelect(event: any) {
    this.files.push(...event.files);
  }

  onRemove(event: any) {

  }

}
