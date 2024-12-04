import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddVariantModalComponent } from '../../modals/add-variant-modal/add-variant-modal.component';
import { VariantService } from '../../services/variant.service';
import { Observable, tap } from 'rxjs';
import { Variant } from '../../models/variant';
import { VariantModalComponent } from '../../modals/variant-modal/variant-modal.component';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrl: './variants.component.scss'
})
export class VariantsComponent {

  constructor(
    public dialogService: DialogService,
    private variantService: VariantService
  ) { }

  variants$: Observable<Variant[]> = this.getVariants();
  variants: Variant[] = [];

  openAddVariantModal() {
    this.dialogService.open(AddVariantModalComponent, {
      header: 'Add Variant',
      width: '70%'
    }).onClose.subscribe((res) => {
      this.getVariants();
    });
  }

  getVariants(): Observable<Variant[]> {
    return this.variants$ = this.variantService.getVariants().pipe(tap(res => {
      this.variants = res;
    }));
  }

  openVariantModal(variant: Variant) {
    this.dialogService.open(VariantModalComponent, {
      header: 'Edit Variant',
      width: '70%',
      data: { variant: variant }
    }).onClose.subscribe((res) => {
      this.getVariants();
    });
  }

}
