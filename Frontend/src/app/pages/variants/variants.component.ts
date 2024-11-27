import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddVariantModalComponent } from '../../modals/add-variant-modal/add-variant-modal.component';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrl: './variants.component.scss'
})
export class VariantsComponent {

  constructor(private dialogService: DialogService) { }

  openAddVariantModal() {
    this.dialogService.open(AddVariantModalComponent, {
      header: 'Add Variant',
      width: '70%'
    });
  }

}
