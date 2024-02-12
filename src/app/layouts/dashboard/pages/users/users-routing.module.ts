import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './estudiante.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'dashboard/users',
      component: UsersComponent
    },
  ])],
  exports: [RouterModule]
})
export class UsersRoutingModule { }