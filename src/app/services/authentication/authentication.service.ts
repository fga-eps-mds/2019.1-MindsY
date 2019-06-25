import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Psychologist } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiURL = "https://mindsy-api-gateway.herokuapp.com/api/authentication";
  // private apiURL = "0.0.0.0:5000";

  private currentUserSubject: BehaviorSubject<Psychologist>;
  public currentUser: Observable<Psychologist>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Psychologist>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Psychologist {
    return this.currentUserSubject.value;
  }

  login(crp: string, password: string) {

    return this.http.post<any>(this.apiURL.concat('/login'), { crp, password });
  }

  logout() {
    /*
    remove user from local storage to log user out
    */
    localStorage.removeItem('crp');
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

  }

}
