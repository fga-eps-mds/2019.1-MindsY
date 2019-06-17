import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Psychologist } from 'src/app/models/index';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public createPsychologist(psychologist: Psychologist) {
    const body = {
      'name': psychologist.name, 
      'email': psychologist.email,
      'number': psychologist.number,
      'telephone_type': psychologist.telephone_type,
      'password': psychologist.password,
      'date_of_birth': psychologist.date_of_birth,
      'crp': psychologist.crp
    };

    return this.http.post(this.apiURL + '/psychologist', JSON.stringify(body));

  }


  public getPsychologist(crp: string) {
    return this.http.get(this.apiURL + '/psychologist/' + crp);
  }

}
