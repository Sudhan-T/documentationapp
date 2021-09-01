import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { LoginComponent } from './components/login/login.component';

import { routing } from './app.routing';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PharmacistLoginComponent } from './components/pharmacist-login/pharmacist-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    LoginComponent,
    AdminLoginComponent,
    PatientLoginComponent,
    PharmacistLoginComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
