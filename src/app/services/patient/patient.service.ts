import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Patient } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  subscribe(arg0: (data: any[]) => void) {
    throw new Error("Method not implemented.");
  }

  apiURL: string = 'https://dry-eyrie-12115.herokuapp.com';
  patients: Patient[] = [];
  patient: Patient;
  patientsJSON: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public createPatient(patient: Patient) {

    if(patient.status == null) {
      patient.status = "andamento";
    } 

    if(patient.observation == null) {
      patient.observation = "";
    }

    const body = {
      'name': patient.name,
      'email': patient.email,
      'number': patient.number,
      'telephone_type': patient.telephone_type,
      'date_of_birth': patient.date_of_birth,
      'scholarity': patient.scholarity,
      'observation': patient.observation,
      'manual_domain': patient.manual_domain,
      'kinship_degree': patient.kinship_degree,
      'registry_number_acc': patient.registry_number_acc,
      'registry_number_pat': patient.registry_number_pat,
      'crp': localStorage.getItem('crp'),
      'status': patient.status
    };

    return this.http.post(this.apiURL + '/register-patient', JSON.stringify(body), this.httpOptions);

  }

  public deletePatient(patient: Patient) {}

  public editPatient(patient: Patient) {

    patient.registry_number_pat.replace('.', '');
    patient.registry_number_pat.replace('-', '');
    patient.registry_number_pat.replace(' ', '');

    patient.registry_number_acc.replace('.', '');
    patient.registry_number_acc.replace('-', '');
    patient.registry_number_acc.replace(' ', '');

    return this.http.put(this.apiURL + '/edit_patient/', patient);
  }

  public getPatient(id: string) {}

  public getAllPatients(crp: string) {
    return  this.http.get(this.apiURL + '/list-patients/' + crp);
  }

  public getPatientInfo(idPatient: string) {
    return this.http.get(this.apiURL + '/patient-information/' + idPatient);
  }

}
