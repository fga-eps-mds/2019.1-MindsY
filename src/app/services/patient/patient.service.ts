import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  subscribe(arg0: (data: any[]) => void) {
    throw new Error("Method not implemented.");
  }

  apiURL: string = 'https://mindsy-api-gateway.herokuapp.com/api/patients';
  patients: Patient[] = [];
  patient: Patient;
  patientsJSON: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token'),
      'crp': localStorage.getItem('crp')
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
      'phoneNumber': patient.number,
      'phoneType': patient.telephone_type,
      'birthDate': patient.date_of_birth,
      'scholarity': patient.scholarity,
      'observation': patient.observation,
      'manualDomain': patient.manual_domain,
      'kinshipDegree': patient.kinship_degree,
      'registryNumberAcc': patient.registry_number_acc,
      'registryNumberPat': patient.registry_number_pat,
      'crp': localStorage.getItem('crp'),
      'status': patient.status
    };
    
    return this.http.post(this.apiURL, JSON.stringify(body), this.httpOptions);

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


  public getAllPatients(crp: string) {
    return this.http.get(this.apiURL + '/psychologist/' + crp, this.httpOptions);
  }

  public getPatientInfo(idPatient: string) {
    return this.http.get(this.apiURL + '/' + idPatient, this.httpOptions);
  }

}
