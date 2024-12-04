import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VariantService } from '../../services/variant.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Variant } from '../../models/variant';
import { Observable, tap } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-variant-modal',
  templateUrl: './variant-modal.component.html',
  styleUrl: './variant-modal.component.scss'
})
export class VariantModalComponent implements OnInit {
  constructor (
    private fb: FormBuilder,
    private variantService: VariantService,
    private dialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig,
    private productService: ProductService
  ) { }

  variant: Variant = this.dynamicDialogConfig.data.variant;

  products$: Observable<Product[]> = this.getProducts();
  products: Product[] = [];

  name: string = this.variant.name;
  description: string = this.variant.description;
  extra_price: number | null = this.variant.extra_price;
  files: any[] = [];
  product_id: number = this.variant.product_id;

  form: any = this.fb.group({
    name: [this.variant.name, Validators.required],
    description: [this.variant.description, Validators.required],
    extra_price: [this.variant.extra_price],
    product_id: [this.variant.product_id]
  });

  formData: FormData = new FormData();

  ngOnInit(): void {
      console.log(this.variant);

  }

  updateVariant() {
    this.formData.append('name', this.name);
    this.formData.append('description', this.description);
    this.formData.append('image', this.files[0]);
    if (this.extra_price != null) {
      this.formData.append('extra_price', this.extra_price.toString());
    }
    this.formData.append('product_id', this.variant.product_id.toString());
    this.formData.append('_method', 'PUT')
    this.variantService.updateVariant(this.formData, this.variant.id!).subscribe((res: any) => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  deleteVariant() {
    this.variantService.deleteVariant(this.variant.id!).subscribe((res: any) => {
      this.dialogRef.close();
    });
  }

  getProducts(): Observable<Product[]> {
    return this.products$ = this.productService.getProducts().pipe(tap(res => {
      this.products = res;
    }));
  }

  onSelect(event: any) {
    this.files.push(...event.files);
  }

  onProductChange(event: any) {
    this.product_id = event.value;
  }
}
