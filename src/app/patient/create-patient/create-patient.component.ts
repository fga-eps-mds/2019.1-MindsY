import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/index';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  constructor() { }

  public patient: Patient = new Patient;
  


  ngOnInit() {
  }

}
