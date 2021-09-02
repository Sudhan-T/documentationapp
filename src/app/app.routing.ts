import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PharmacistLoginComponent } from './components/pharmacist-login/pharmacist-login.component';
const routes: Routes = [
  //  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'patientlogin', component: PatientLoginComponent },
  { path: 'pharmacistlogin', component: PharmacistLoginComponent }
];
export const routing: ModuleWithProviders <any> = RouterModule.forRoot(routes);
