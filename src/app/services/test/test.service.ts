import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/index';
import { Result } from 'src/app/models/index';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { DatePipe } from  '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiURL: string = 'https://powerful-harbor-95552.herokuapp.com';
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public createResult(result: Result, id: number, id_evaluation: string){
    const body = {
      'id_result': result.id_result,
      'gross_score': result.gross_score,
      'considerate_score': result.considerate_score,
      'classification': result.classification,
      'id_evaluation': id_evaluation
  };

  return this.http.post(this.apiURL + '/result/' + id, JSON.stringify(body), this.httpOptions);
  }

  public getWiscSubTests(){
    const href = this.apiURL + '/wisc-list';
    return this.http.get(href);
  }

  

}
