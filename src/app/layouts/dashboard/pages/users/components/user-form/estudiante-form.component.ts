import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html',
  styleUrl: './estudiante-form.component.scss',
})
export class UserFormComponent {
  estudianteForm: FormGroup;

  @Output()
  estudianteSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.estudianteForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      curso: this.fb.control('', Validators.required),
      profesor: this.fb.control('', Validators.required),
      contraseña: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.estudianteForm.invalid) {
      this.estudianteForm.markAllAsTouched();
    } else {
      this.estudianteSubmitted.emit(this.estudianteForm.value);
      this.estudianteForm.reset();
    }
  }

}
