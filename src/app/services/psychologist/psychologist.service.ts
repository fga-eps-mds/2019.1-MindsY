import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Psychologist } from 'src/app/models/index';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'https://floating-falls-77715.herokuapp.com';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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

    return this.http.post(this.apiURL + '/psychologist', JSON.stringify(body), this.httpOptions);

  }


  public getPsychologist(crp: string) {
    return this.http.get(this.apiURL + '/psychologist/' + crp);
  }

}
