import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth.module';
import { LoginComponent } from './login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: LoginComponent
    },

  ]

  )],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
