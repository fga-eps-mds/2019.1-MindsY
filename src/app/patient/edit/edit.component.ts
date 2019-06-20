import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PatientService } from 'src/app/services/index';
import { Patient } from 'src/app/models/index';
import { PatientMasks } from 'src/app/patient/patient-masks';



@Component({
  selector: 'app-editpacient',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditPacientComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  public patient: Patient = new Patient;
  email = '';
  maskphone = PatientMasks.MASK_PHONE;
  maskcpf = PatientMasks.MASK_CPF;
  maskcep = PatientMasks.MASK_CEP;

  ngOnInit() {
  
  }

  edit() {
    this.patientService.editPatient(this.patient)
    .subscribe((data: any) => data = 
      console.log('Usuário editado')
    )
  };

  private getPatientInfo() {
    this.patientService.getPatientInfo(1)
    .subscribe(
      result => this.email = result['email']
    );

  }
}
