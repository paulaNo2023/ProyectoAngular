import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home.module';
import { HomeComponent } from './home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '/dashboard/home',
      component: HomeComponent
    },
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }