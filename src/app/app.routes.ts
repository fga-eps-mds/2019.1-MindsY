  import { Routes } from '@angular/router';
  import { SectionHomeComponent } from './layouts/section-home/section-home.component';
  import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';

  export const ROUTES: Routes = [
    { path: 'home', component: SectionHomeComponent  },
    { path: 'profileview', component: SectionProfileComponent  }]
