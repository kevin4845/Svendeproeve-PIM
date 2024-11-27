import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductFamilyService } from '../../services/product-family.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductFamily } from '../../models/product-family';

@Component({
  selector: 'app-product-family-modal',
  templateUrl: './product-family-modal.component.html',
  styleUrl: './product-family-modal.component.scss'
})
export class ProductFamilyModalComponent {

  constructor (
    private fb: FormBuilder,
    private productFamilyService: ProductFamilyService,
    private dialogRef: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig
  ) { }

  productFamily: ProductFamily = this.dynamicDialogConfig.data.productFamily;

  name: string = this.productFamily.name;
  description: string = this.productFamily.description;
  files: any[] = [];

  form: any = this.fb.group({
    name: [this.productFamily.name, Validators.required],
    description: [this.productFamily.description, Validators.required]
  });

  formData: FormData = new FormData();

  updateFamily() {
    this.formData.append('name', this.name);
    this.formData.append('description', this.description);
    this.formData.append('image', this.files[0]);
    this.productFamilyService.updateProductFamily(this.formData, this.productFamily.id!).subscribe((res: any) => {
      console.log(res);
      this.dialogRef.close();
    });
  }

  onSelect(event: any) {
    this.files.push(...event.files);
  }

  onRemove(event: any) {

  }

}
