import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
 //import { LoginComponent } from './view/login/login.component';
import{AdminModule} from './admin/admin.module';
import { routing } from './app.routing';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PharmacistLoginComponent } from './components/pharmacist-login/pharmacist-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
     //LoginComponent,
    AdminLoginComponent,
    PatientLoginComponent,
    PharmacistLoginComponent
  ],
  imports: [
    BrowserModule,AdminModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
