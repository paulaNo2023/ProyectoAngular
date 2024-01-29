import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './estudiante.component';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './components/user-form/estudiante-form.component';

// ENVOLTURA DE INPUT
import { MatFormFieldModule } from '@angular/material/form-field';
// INPUT
import { MatInputModule } from '@angular/material/input';
// SELECT
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FuenteDirective } from '../directives/fuente.directive';
import { NombrePipe } from '../pipes/nombre.pipe';

@NgModule({
  declarations: [UsersComponent, UserFormComponent, FuenteDirective, NombrePipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [UsersComponent],
  providers:  [NombrePipe],
})
export class UsersModule {

}
