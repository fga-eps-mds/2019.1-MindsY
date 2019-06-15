import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/models/index';
import { UserService } from '../psychologist/psychologist.service';
import { Patients } from './patients-mock';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  subscribe(arg0: (data: any[]) => void) {
    throw new Error("Method not implemented.");
  }

  apiURL: string = 'http//0.0.0.0:5000';

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  public createPatient(patient: Patient) {
    return this.http.post(this.apiURL + '/register', patient);
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

  public getAllPatients(crp: String) {
    return this.http.get(this.apiURL + '/list-patients/' + crp);
  }

  public getPatientInfo(idPatient: Number) {
    return this.http.get(this.apiURL + '/patient-information/' + idPatient);
  }

}
