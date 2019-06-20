import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Psychologist } from 'src/app/models/index';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'https://floating-falls-77715.herokuapp.com';
  psychologist: Psychologist;
  psycho: string; 

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
    this.http.get<Psychologist>(this.apiURL + '/psychologist/' + crp)
      .subscribe(
        data => this.psycho = JSON.stringify(data)
      );

      return this.psycho;

  }

  public getPsychologistInfo(crp: string) {
    var userInfo = this.getPsychologist(crp);
    var obj = JSON.parse(userInfo);

    var psychologist: Psychologist;

    psychologist.crp = obj.crp;
    psychologist.date_of_birth = obj.date_of_birth;
    psychologist.email = obj.person.email;
    psychologist.number = obj.person.telephone.number;
    psychologist.telephone_type = obj.person.telephone.telephone_type;

    return psychologist;

  }

}
