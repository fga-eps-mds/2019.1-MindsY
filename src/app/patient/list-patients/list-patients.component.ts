import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PatientService, UserService } from 'src/app/services/index';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})

export class ListPatientsComponent implements OnInit {

  patients: any = [];
  crp = new String ;
  columns: string[];
  cpf: string[];
  id_patient: string[];

  constructor(
    private patientService: PatientService ) { }

  ngOnInit() {

   this.loadAllPatients();
   this.columns = ['name', 'registryNumberPat', 'status'];
   this.cpf = ['idPatient'];
   this.id_patient = ['idPatient'];

  }

  private loadAllPatients() {
    this.patientService.getAllPatients(localStorage.getItem('crp'))
    .subscribe(
      (res) => {
        this.patients = res;
        console.log(res);
      });
  }

}
