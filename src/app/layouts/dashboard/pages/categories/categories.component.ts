import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {

  categoriesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoriesForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      products: this.fb.array([]),
    });

    console.log(this.categoriesForm);

  }

  get productsControl() {
    return this.categoriesForm.get('products') as FormArray<FormGroup>;
  }

  getControl(index: number) {
    return this.productsControl.controls[index]?.get(
      'productName'
    ) as FormControl;
  }

  deleteControl(index: number) {
    this.productsControl.removeAt(index);
  }

  onAddProduct(): void {
    const formArray = this.categoriesForm.get('products');
    if (formArray instanceof FormArray) {
      formArray.push(
        this.fb.group({
          productName: this.fb.control(''),
        })
      );
    }
  }
}
