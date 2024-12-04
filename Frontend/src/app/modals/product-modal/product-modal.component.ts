import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductFamilyService } from '../../services/product-family.service';
import { ProductFamily } from '../../models/product-family';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private productFamilyService: ProductFamilyService,
    private dynamicDialogConfig: DynamicDialogConfig,
    private productService: ProductService,
    private dialogRef: DynamicDialogRef
  ) { }

  product: Product = this.dynamicDialogConfig.data.product;

  form: any = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    base_price: [0, Validators.required],
    product_family_id: [this.product.product_family?.id!]
  });

  name: string = this.product.name;
  description: string = this.product.description;
  base_price: number = this.product.base_price;
  product_family_id: number = this.product.product_family?.id!;
  files: any[] = [];

  productFamilies$: Observable<ProductFamily[]> = this.getProductFamilies();
  productFamilies: ProductFamily[] = [];

  formData: FormData = new FormData();

  ngOnInit(): void {
      console.log(this.product);

  }

  updateProduct() {
    this.formData.append('name', this.name);
    this.formData.append('description', this.description);
    this.formData.append('image', this.files[0]);
    this.formData.append('base_price', this.base_price.toString());
    if (this.product_family_id != null) {
      this.formData.append('product_family_id', this.product_family_id.toString());
    }
    this.formData.append('_method', 'PUT')
    this.productService.updateProduct(this.formData, this.product.id!).subscribe((res: any) => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id!).subscribe((res: any) => {
      this.dialogRef.close();
    });
  }

  getProductFamilies(): Observable<ProductFamily[]> {
    return this.productFamilies$ = this.productFamilyService.getProductFamilies().pipe(tap(res => {
      this.productFamilies = res;
    }));
  }

  onSelect(event: any) {
    this.files.push(...event.files);
  }

  onFamilyChange(event: any) {
    this.product_family_id = event.value;
  }

}
