import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, LoginComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AuthModule { }
