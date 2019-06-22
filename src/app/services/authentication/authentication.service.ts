import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Psychologist } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiURL = "https://evening-inlet-25420.herokuapp.com";
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
    return this.http.post<any>(this.apiURL + `/login`, { crp, password })
      .pipe(map(user => {
        /*
        login successful if there's a jwt token in the response
        */

        if (user && user.token) {
          /*
          store user details and jwt token in local storage to keep user logged in between page refreshes
          */
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          
        }

        return user;

      }));
  }

  logout() {
    /*
    remove user from local storage to log user out
    */

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

  }

}
