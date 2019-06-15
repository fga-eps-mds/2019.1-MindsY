import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public login(login: Login) {
    localStorage.setItem('crp', login.crp);
    return this.http.post(this.loginUrl + '/login', login);

  }

}
