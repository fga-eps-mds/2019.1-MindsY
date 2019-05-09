  import { Routes } from '@angular/router';
  //import { Body1Component } from './body1/body1.component';
  import { NavbarComponent } from './layouts/navbar/navbar.component';
  import { SidebarComponent } from './layouts/sidebar/sidebar.component';
  import { SectionHomeComponent } from './layouts/section-home/section-home.component';
  import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
  import { AppComponent } from './app.component';

  export const ROUTES: Routes = [
    { path: 'home', component: SectionHomeComponent  },
    { path: 'profileview', component: SectionProfileComponent  }]
