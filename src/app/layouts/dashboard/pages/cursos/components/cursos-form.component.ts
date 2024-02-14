import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cursos } from '../model/index';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss',
})
export class CursosFormComponent {
  estudianteForm: FormGroup;

  @Output()
  cursosSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.estudianteForm = this.fb.group({
      curso: this.fb.control('', Validators.required),
      profesor: this.fb.control('', Validators.required),
      semestre: this.fb.control('', Validators.required),
      creditos: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.estudianteForm.invalid) {
      this.estudianteForm.markAllAsTouched();
    } else {
      this.cursosSubmitted.emit(this.estudianteForm.value);
      this.estudianteForm.reset();
    }
  }

}
