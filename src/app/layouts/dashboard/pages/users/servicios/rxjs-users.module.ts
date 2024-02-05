import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsUsersComponent } from './rxjs-users.component';



@NgModule({
  declarations: [
    RxjsUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RxjsUsersModule],
})
export class RxjsUsersModule { }
