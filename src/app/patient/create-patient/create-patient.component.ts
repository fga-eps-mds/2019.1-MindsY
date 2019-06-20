import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from 'src/app/models/index';
import { PatientService } from 'src/app/services';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  public patient: Patient = new Patient;
  
  ngOnInit() {
  }

  register() {

    this.patientService.createPatient(this.patient)
    .subscribe(
      (data: any) => 
        data = 
        console.log(this.patient));
        this.router.navigate(['/']);
  }

}
