import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/index';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  //apiURL: string = 'http://localhost:3000'; //Uso com Docker

  
  apiURL: string = 'http://0.0.0.0:5000'; //Uso manual SEM Docker

  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });
  
  updateHeaders: Headers = new Headers({
    'Content-Type': 'application/json',
    'appToken': localStorage.getItem('token')
   });

  constructor(private http: HttpClient) { }

  public editReport(id: number) {
    return this.http.put(this.apiURL + '/evaluation', id);
  }

  public updateReport(report: Report, id:Number) {
    const href = this.apiURL + '/evaluation/' + id;

    const body = {
      'anamnese': report.anamnese,
      'dt_start': report.dt_start,
      'dt_end': report.dt_end,
      'id_patient': report.id_patient,
      'crp': report.crp
    };

    return this.http.put(href, JSON.stringify(body));
  }

  /*
  public getUsingReport() {
    const localUserValue = localStorage.getItem('reportData');
    if (localUserValue) {
      return JSON.parse(localUserValue);
    } else {
      console.error('No reportfound!');
    }
}
*/

}
