import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Psychologist } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public createUser(psychologist: Psychologist) {
    return this.http.post(this.apiURL + '/register', psychologist);
  }

}
