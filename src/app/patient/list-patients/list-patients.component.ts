import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PatientService, UserService } from 'src/app/services/index';
import { Patient } from 'src/app/models';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})

export class ListPatientsComponent implements OnInit {

  patients: Patient[] = [];
  columns: string[];
  crp = new String ;

  constructor(
    private patientService: PatientService,
    private userService: UserService, 
    private chRef: ChangeDetectorRef) { }

  template:`
    ASsafsdf
    asfdasdf
    asdfa
    sdfas
    fasf
  `

  ngOnInit() {

    this.patientService.getAllPatients(localStorage.getItem('crp'))
    .subscribe(
      patients => {
        this.patients.pop();
      } 
    );

    this.columns = ['name', 'registry_number_pat', 'number'];

  }



}
