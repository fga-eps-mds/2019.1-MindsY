import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/index';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';


const httpOptions = {
  headersVar: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  //apiURL: string = 'http://localhost:3000'; //Uso com Docker


  apiURL: string = 'http://0.0.0.0:5000'; //Uso manual SEM Docker

  constructor(private http: HttpClient) { }


  public getReport(id: number){
    const href = this.apiURL + '/evaluation/' + id;
    return this.http.get(href);
    // .toPromise().then(res = );
  }


  updateReport(f: NgForm) {

    return this.http.put(this.apiURL + '/evaluation/1', f.value)
    .subscribe(
      (data: any) => data =
      console.log(data)
    );
  }



}
