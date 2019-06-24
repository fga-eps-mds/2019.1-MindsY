
  import { Routes } from '@angular/router';

  import { SectionHomeComponent } from './layouts/section-home/section-home.component';
  import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
  import { CreatePsychologistComponent } from './psychologist/create/createPsychologist.component';
  import { EditPacientComponent } from './patient/edit/edit.component';
  import { ListPatientsComponent } from './patient/list-patients/list-patients.component';
  import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
  import { CreateReportComponent } from './patient/report/create-report/create-report.component';
  import { EditReportComponent } from './patient/report/edit-report/edit-report.component';
  import { CreateTestComponent } from './patient/test/create-test/create-test.component';
  import { GenerateGraphsComponent } from './patient/generate-graphs/generate-graphs.component';

  import { LoginComponent } from './psychologist/login/login.component';
  import { LoadComponent } from './patient/load/load.component';

  export const ROUTES: Routes = [
    { path: '', component: SectionHomeComponent },
    { path: 'profileview',  component: SectionProfileComponent},
    { path: 'create-psychologist', component: CreatePsychologistComponent},
    { path: 'edit-patient/:id', component: EditPacientComponent},
    { path: 'load-patient/:id', component: LoadComponent},
    { path: 'list-patients', component: ListPatientsComponent},
    { path: 'create-patient', component: CreatePatientComponent},
    { path: 'create-report/:id', component: CreateReportComponent},
    { path: 'edit-report/:id/:id_patient', component: EditReportComponent},
    { path: 'create-test/:id/:id_patient', component: CreateTestComponent},
    { path: 'general-statistics', component: GenerateGraphsComponent},
    { path: 'login', component: LoginComponent} 
  ];
