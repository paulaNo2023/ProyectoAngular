import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LoginComponent } from './layouts/auth/login.component';
import { NotFoundComponent } from './layouts/404/not-found.component';





registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
   

  ],
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
      
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue:{
      appearance: 'outline',
        
      },
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
