  
  import { Routes } from '@angular/router';
  
  import { SectionHomeComponent } from './layouts/section-home/section-home.component';
  import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
  import { CreateAccountComponent } from './user/create/createAccount.component';

  export const ROUTES: Routes = [
    { path: 'profileview', component: SectionProfileComponent  },
    { path: '', component: SectionHomeComponent },
    { path: 'profileview',      component: SectionProfileComponent},
    {path: 'create-psychologist', component: CreateAccountComponent} ];


 
    