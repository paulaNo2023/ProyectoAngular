import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/estudiante.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

import { UsersComponent } from './pages/users/estudiante.component';
import { CursosModule } from './pages/cursos/cursos.module';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CategoriesModule,
    RouterModule,
    UsersModule,
    MatListModule,
    CursosModule,
    
  


  

  

    
   
    
    


  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
