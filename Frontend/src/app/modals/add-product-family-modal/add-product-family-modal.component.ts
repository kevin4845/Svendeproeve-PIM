import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductFamilyService } from '../../services/product-family.service';
import { Observable } from 'rxjs';
import { ProductFamily } from '../../models/product-family';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-product-family-modal',
  templateUrl: './add-product-family-modal.component.html',
  styleUrl: './add-product-family-modal.component.scss'
})
export class AddProductFamilyModalComponent {

  constructor (
    private fb: FormBuilder,
    private productFamilyService: ProductFamilyService,
    private dialogRef: DynamicDialogRef
  ) { }

  name: string = '';
  description: string = '';
  files: any[] = [];

  form: any = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  formData: FormData = new FormData();

  addFamily() {
    this.formData.set('name', this.name);
    this.formData.set('description', this.description);
    this.formData.set('image', this.files[0]);
    this.productFamilyService.addProductFamily(this.formData).subscribe((res: any) => {
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
