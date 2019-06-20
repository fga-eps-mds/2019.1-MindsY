import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PatientService, UserService } from 'src/app/services/index';
import { FormsModule } from '@angular/forms';
import { Patient } from 'src/app/models';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})

export class ListPatientsComponent implements OnInit {

  patients: Patient[] = [];
  crp = new String ;
  columns: string[];
  cpf: string[];
  id_patient: string[];

  constructor(
    private patientService: PatientService ) { }

  ngOnInit() {

   this.loadAllPatients();
   this.columns = ['name', 'registry_number', 'status'];
   this.cpf = ['id_patient'];
   this.id_patient = ['id_patient'];
   
  }

  private loadAllPatients() {
    this.patientService.getAllPatients(localStorage.getItem('crp'))
    .subscribe(
      (res) => {
        this.patients = res["Patient's Psychologists"];
        console.log(this.patients);
      });
  } 

}
