import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
