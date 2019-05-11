import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiURL: string = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  public createPatient(patient: Patient) {}

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

  public getPatient(id: String) {}

  public getAllPatients() {}

}
