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
import { UsersService } from '../../../../core/services/users.service';
import { UsersMockService } from '../../../../core/services/user-mock.service';
import { RxjsUsersComponent } from './servicios/rxjs-users.component';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UsersComponent, UserFormComponent, FuenteDirective, NombrePipe ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    UsersRoutingModule
  

    
    
  ],
  exports: [UsersComponent],
  providers:  [NombrePipe,
    {
      provide: UsersService,
      useClass : UsersMockService
    },
  
  ],
})
export class UsersModule {

}
