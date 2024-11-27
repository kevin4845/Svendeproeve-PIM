import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddProductFamilyModalComponent } from '../../modals/add-product-family-modal/add-product-family-modal.component';
import { Observable, tap } from 'rxjs';
import { ProductFamily } from '../../models/product-family';
import { ProductFamilyService } from '../../services/product-family.service';
import { ProductFamilyModalComponent } from '../../modals/product-family-modal/product-family-modal.component';

@Component({
  selector: 'app-product-families',
  templateUrl: './product-families.component.html',
  styleUrl: './product-families.component.scss'
})
export class ProductFamiliesComponent {

  constructor(
    public dialogService: DialogService,
    private productFamilyService: ProductFamilyService
  ) { }

  productFamilies$: Observable<ProductFamily[]> = this.getProductFamilies();
  productFamilies: ProductFamily[] = [];

  openAddFamilyModal() {
    this.dialogService.open(AddProductFamilyModalComponent, {
      header: 'Add Family',
      width: '70%'
    }).onClose.subscribe((res) => {
      this.getProductFamilies();
    });
  }

  getProductFamilies(): Observable<ProductFamily[]> {
    return this.productFamilies$ = this.productFamilyService.getProductFamilies().pipe(tap(res => {
      console.log(res);

      this.productFamilies = res;
    }));
  }

  openProductFamilyModal(productFamily: ProductFamily) {
    this.dialogService.open(ProductFamilyModalComponent, {
      header: 'Edit Family',
      width: '70%',
      data: { productFamily: productFamily }
    }).onClose.subscribe((res) => {
      if (res != undefined) {
        this.getProductFamilies();
      }
    });
  }

}
