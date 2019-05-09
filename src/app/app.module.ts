import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditpacientComponent } from '../app/patient/edit/edit.component';
import { ROUTES } from './app.routes';

import { LoginComponent } from './psychologist/login/login.component';
import { CreateComponent } from './psychologist/create/create.component';

import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SectionHomeComponent } from './layouts/section-home/section-home.component';
import { SectionProfileComponent } from './layouts/section-profile/section-profile.component';


const appRoutes: Routes = [
  { path: '', component: SectionHomeComponent },
  { path: 'profileview',      component: SectionProfileComponent},
  { path: 'create-psychologist', component: CreateComponent},
  { path: 'edit-patient', component: EditpacientComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    NavbarComponent,
    SidebarComponent,
    SectionHomeComponent,
    SectionProfileComponent,
    LoginComponent,
    EditpacientComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
