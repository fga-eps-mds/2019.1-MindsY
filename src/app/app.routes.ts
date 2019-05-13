  
  import { Routes } from '@angular/router';
  
  import { SectionHomeComponent } from './layouts/section-home/section-home.component';
  import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
  import { CreateComponent } from './psychologist/create/create.component';
  import { EditpacientComponent } from './patient/edit/edit.component';
  import { ListPatientsComponent } from './patient/list-patients/list-patients.component';


  export const ROUTES: Routes = [
    { path: '', component: SectionHomeComponent },
    { path: 'profileview',      component: SectionProfileComponent},
    { path: 'create-psychologist', component: CreateComponent},
    { path: 'edit-patient', component: EditpacientComponent},
    { path: 'list-patients', component: ListPatientsComponent}, ];

