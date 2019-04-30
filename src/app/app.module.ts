import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { ROUTES } from './app.routes';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SectionHomeComponent } from './layouts/section-home/section-home.component';
import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: SectionHomeComponent },
  { path: 'profileview',      component: SectionProfileComponent},
  {path: 'create-psychologist', component: CreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    NavbarComponent,
    SidebarComponent,
    SectionHomeComponent,
    SectionProfileComponent,
    LoginComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
