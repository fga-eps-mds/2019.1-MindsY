import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/index';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';




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

  public createReport() {

    const body = {
        'conclusion': "sou uma conclusão",
        'anamnese': " wfwfsfsfs",
        'dt_start': "2019-08-22",
        'dt_end': "2019-09-22",
        'crp': "0459054",
        'id_patient': "5"
          // 'conclusion': report.conclusion,
          // 'anamnese': report.anamnese,
          // 'dt_start': report.dt_start,
          // 'dt_end': report.dt_end,
          // 'crp': report.crp,
          // 'id_patient': report.id_evaluation
    };

    return this.http.post(this.apiURL + '/evaluation', JSON.stringify(body), this.httpOptions);
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
