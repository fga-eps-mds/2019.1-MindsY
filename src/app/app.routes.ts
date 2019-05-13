  
  import { Routes } from '@angular/router';
  
  import { SectionHomeComponent } from './layouts/section-home/section-home.component';
  import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
  import { CreateComponent } from './user/create/create.component';

  export const ROUTES: Routes = [
    { path: 'profileview', component: SectionProfileComponent  },
    { path: '', component: SectionHomeComponent },
    { path: 'profileview',      component: SectionProfileComponent},
    {path: 'create-psychologist', component: CreateComponent} ];


 
    