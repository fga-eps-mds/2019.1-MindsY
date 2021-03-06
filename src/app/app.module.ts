import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { EditPacientComponent } from '../app/patient/edit/edit.component';
import { ROUTES } from './app.routes';

import { LoginComponent } from './psychologist/login/login.component';
import { CreatePsychologistComponent } from './psychologist/create/createPsychologist.component';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SectionHomeComponent } from './layouts/section-home/section-home.component';
import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
import { ListPatientsComponent } from './patient/list-patients/list-patients.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { CreateReportComponent } from './patient/report/create-report/create-report.component';
import { EditReportComponent } from './patient/report/edit-report/edit-report.component';
import { LoadComponent } from './patient/load/load.component';
import { LoadReportComponent } from './patient/report/load-report/load-report.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionHomeComponent,
    CreatePsychologistComponent,
    SectionProfileComponent,
    LoginComponent,
    CreatePatientComponent,
    EditPacientComponent,
    ListPatientsComponent,
    CreateReportComponent,
    EditReportComponent,
    LoadComponent,
    LoadReportComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    TextMaskModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
