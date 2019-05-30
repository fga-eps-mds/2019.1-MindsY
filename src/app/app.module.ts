import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
<<<<<<< HEAD

const appRoutes: Routes = [
  { path: '', component: SectionHomeComponent },
  { path: 'profileview', component: SectionProfileComponent},
  { path: 'create-psychologist', component: CreateComponent},
  { path: 'edit-patient', component: EditpacientComponent},
  { path: 'list-patients', component: ListPatientsComponent},

];
=======
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { CreateReportComponent } from './patient/report/create-report/create-report.component';
>>>>>>> 13fec17e50c54a48caec7ed25bf16a94d4891513

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionHomeComponent,
    CreatePsychologistComponent,
    SectionProfileComponent,
    LoginComponent,
<<<<<<< HEAD
    EditpacientComponent,
    ListPatientsComponent
=======
    CreatePatientComponent,
    EditPacientComponent,
    ListPatientsComponent,
    CreateReportComponent,
>>>>>>> 13fec17e50c54a48caec7ed25bf16a94d4891513
  ],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
