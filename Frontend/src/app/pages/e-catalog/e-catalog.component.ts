import { Component } from '@angular/core';
import { VariantService } from '../../services/variant.service';
import { tap } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-e-catalog',
  templateUrl: './e-catalog.component.html',
  styleUrl: './e-catalog.component.scss'
})
export class ECatalogComponent {
  constructor (
    private productService: ProductService
  ) { }

  products$ = this.getProducts();
  products: any[] = [];

  getProducts() {
    return this.productService.getProducts().pipe(tap((res: any) => {
      this.products = res;
    }));
  }

}
