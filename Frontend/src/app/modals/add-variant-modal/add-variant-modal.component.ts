import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Observable, tap } from 'rxjs';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment';
import { VariantService } from '../../services/variant.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-variant-modal',
  templateUrl: './add-variant-modal.component.html',
  styleUrl: './add-variant-modal.component.scss'
})
export class AddVariantModalComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private productService: ProductService,
    private variantService: VariantService,
    private dialogRef: DynamicDialogRef
  ) { }

  form: any = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    extra_price: [''],
    product: ['', Validators.required]
  });

  name: string = '';
  description: string = '';
  extra_price: number | null = null;
  product_id: number = 0;
  files: any[] = [];

  products$: Observable<Product[]> = this.getProducts();
  products: Product[] = [];

  formData: FormData = new FormData();

  addVariant() {
    this.formData.set('name', this.name);
    this.formData.set('description', this.description);
    if (this.extra_price != null) {
      this.formData.set('extra_price', this.extra_price!.toString());
    }
    this.formData.set('image', this.files[0]);
    this.formData.set('product_id', this.product_id.toString());
    this.variantService.addVariant(this.formData).subscribe((res: any) => {
      console.log(res);
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

  onRemove(event: any) {

  }

  onProductChange(event: any) {
    this.product_id = event.value;
  }

}
