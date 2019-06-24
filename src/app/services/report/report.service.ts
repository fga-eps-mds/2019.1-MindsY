import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/index';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { DatePipe } from  '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  //apiURL: string = 'https://powerful-harbor-95552.herokuapp.com'; //Uso manual SEM Docker

  apiURL: string = 'https://powerful-harbor-95552.herokuapp.com';
  constructor(private http: HttpClient) { }

  pipe = new DatePipe('en-US');
  today = Date.now();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getReportInfo(id: string){
    const href = this.apiURL + '/evaluation/' + id;
    return this.http.get(href);
  }

  public createReport(report: Report, id_pacient: string, crp: string) {

    const body = {
        'conclusion': report.conclusion,
        'anamnese': report.anamnese,
        'dt_start': this.pipe.transform(this.today, 'dd-MM-yyyy'),
        'crp': crp,
        'id_patient': id_pacient
    };

    return this.http.post(this.apiURL + '/evaluation', JSON.stringify(body), this.httpOptions);
  }

  getReportsPatient(crp: string, id: string) {
    return this.http.get(this.apiURL + '/psychologist-evaluation/' + crp + '/' + id, this.httpOptions);
  }

  editReport(f: NgForm, id: string) {
    console.log("VALOR DO ID:" + id);
    
    return this.http.put(this.apiURL + '/evaluation/' + id, f.value)
    .subscribe(
      (data: any) => data =
      console.log(data)
    );
  }

  load() {
    location.reload()
  }


}
