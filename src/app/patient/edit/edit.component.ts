import { Component, OnInit } from '@angular/core';

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
  maskphone = PatientMasks.MASK_PHONE;
  maskcpf = PatientMasks.MASK_CPF;
  maskcep = PatientMasks.MASK_CEP;

  ngOnInit() {
    this.patientService.getPatientInfo(this.patient.id_patient);
  }

  edit() {
    this.patientService.editPatient(this.patient)
    .subscribe((data: any) => data = 
      console.log('Usuário editado')
    )
  };

}
