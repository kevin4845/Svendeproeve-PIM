import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddProductModalComponent } from '../../modals/add-product-modal/add-product-modal.component';
import { Observable, tap } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(
    public dialogService: DialogService,
    private productService: ProductService
  ) { }

  products$: Observable<Product[]> = this.getProducts();
  products: Product[] = [];

  openAddProductModal() {
    this.dialogService.open(AddProductModalComponent, {
      header: 'Add Product',
      width: '70%'
    }).onClose.subscribe((res) => {
      if (res != undefined) {
        this.getProducts();
      }
    });
  }

  getProducts(): Observable<Product[]> {
    return this.products$ = this.productService.getProducts().pipe(tap(res => {
      this.products = res;
    }));
  }
}
