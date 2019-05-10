import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiURL: string = 'http//localhost:'; //TODO inserir porta do microserviço de paciente

  constructor(private http: HttpClient) { }

  public createPatient(patient: Patient) {}

  public deletePatient(patient: Patient) {}

  public editPatient(patient: Patient) {
    return this.http.put(this.apiURL + '/edit/id', patient);
  }

  public getPatient(id: String) {}

  public getAllPatients() {}

}
