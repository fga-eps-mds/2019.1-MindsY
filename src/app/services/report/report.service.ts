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

  //apiURL: string = 'https://powerful-harbor-95552.herokuapp.com'; //Uso manual SEM Docker

  apiURL: string = 'https://powerful-harbor-95552.herokuapp.com';
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getReportInfo(id: string){
    const href = this.apiURL + '/evaluation/' + id;
    return this.http.get(href);
  }

  createReport(report: Report) {

    const body = {
    //   'name': report.name,
    //   'email': report.email,
    //   'number': report.number,
    //   'telephone_type': report.telephone_type,
    //   'date_of_birth': report.date_of_birth,
    //   'scholarity': report.scholarity,
    //   'observation': report.observation,
    //   'manual_domain': report.manual_domain,
    //   'kinship_degree': report.kinship_degree,
    //   'registry_number_acc': report.registry_number_acc,
    //   'registry_number_pat': report.registry_number_pat,
    //   'crp': localStorage.getItem('crp'),
    //   'status': report.status
    };

    return this.http.post(this.apiURL + '/evaluation/', JSON.stringify(body), this.httpOptions);
  }

  // public createPatient(patient: Patient) {

  //   if(patient.status == null) {
  //     patient.status = "andamento";
  //   } 

  //   if(patient.observation == null) {
  //     patient.observation = "";
  //   }

  //   const body = {
  //     'name': patient.name,
  //     'email': patient.email,
  //     'number': patient.number,
  //     'telephone_type': patient.telephone_type,
  //     'date_of_birth': patient.date_of_birth,
  //     'scholarity': patient.scholarity,
  //     'observation': patient.observation,
  //     'manual_domain': patient.manual_domain,
  //     'kinship_degree': patient.kinship_degree,
  //     'registry_number_acc': patient.registry_number_acc,
  //     'registry_number_pat': patient.registry_number_pat,
  //     'crp': localStorage.getItem('crp'),
  //     'status': patient.status
  //   };

  //   return this.http.post(this.apiURL + '/register-patient', JSON.stringify(body), this.httpOptions);

  // }

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
