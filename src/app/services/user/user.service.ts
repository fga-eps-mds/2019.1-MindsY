import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Psychologist } from 'src/app/models/psychologist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  public createUser() {
    console.log("*****BATEU NO SERVICE ***");
    var psychologist: Psychologist = {
      name: "Amanda",
      crp: "01/124563",
      date_of_birth: "03/02/1997",
      email: "amanda.pires@gmail.com",
      number: "61992538538",
      password: "123456789",
      telephone_type: "pessoal"
    };
    return this.http.post(this.apiURL + '/register', psychologist);
  }

  public updateUser(psychologist: Psychologist) {}

  public deleteUser(id: Number) {}

  public getUserByEmail(email: String) {}

  public getUsers(url?: String) {}

}
