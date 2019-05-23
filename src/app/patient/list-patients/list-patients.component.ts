import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/index';
import { Patient } from 'src/app/models';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patients: Patient[];
  columns: string[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    //TODO: Pegar is do psicólogo que está logado.
    this.patients = this.patientService.getAllPatients('01-122454');
    this.columns = ['name', 'registry_number_pat', 'number'];
    
  }

}
