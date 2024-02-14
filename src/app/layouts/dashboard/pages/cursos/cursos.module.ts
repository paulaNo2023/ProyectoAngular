import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { CursosFormComponent } from './components/cursos-form.component';

// ENVOLTURA DE INPUT
import { MatFormFieldModule } from '@angular/material/form-field';
// INPUT
import { MatInputModule } from '@angular/material/input';
// SELECT
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { UsersService } from '../../../../core/services/users.service';
import { UsersMockService } from '../../../../core/services/user-mock.service';

import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { Cursos } from './model/index';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';



@NgModule({
  declarations: [CursosComponent,CursosFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    CursosRoutingModule
  

    
    
  ],
  exports: [CursosFormComponent],
  
  
})
export class CursosModule {

}