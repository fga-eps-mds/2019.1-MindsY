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
  columns: string[];
  cpf: string[];
  crp = new String ;

  constructor(
    private patientService: PatientService ) { }

  ngOnInit() {

   this.loadAllPatients();
   this.columns = ['name', 'registry_number'];
   this.cpf = ['status'];
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
