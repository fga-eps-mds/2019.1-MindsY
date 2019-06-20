import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { PatientService } from 'src/app/services/index';
import { Patient } from 'src/app/models/index';


@Component({
  selector: 'app-editpacient',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditPacientComponent implements OnInit {

  reload = true;
  patient: Patient = new Patient;
  constructor (
    private patientService: PatientService, 
    private route: ActivatedRoute
  ) { }

  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setAndFormat(); 

  }

  ngOnDestroy() {
    localStorage.removeItem('actualPatient');
  }

  edit() {
    this.patientService.editPatient(this.patient)
    .subscribe((data: any) => data = 
      console.log('Usuário editado')
    )
  };

  private setPatientInfo() {
    var patientJson = localStorage.getItem('actualPatient');
    var patient = JSON.parse(patientJson);

    this.patient.name = patient["name"];
    this.patient.email = patient["email"];
    this.patient.kinship_degree = patient["kinship_degree"];
    this.patient.number = patient["telephone"][0]["number"];
    this.patient.scholarity = patient["scholarity"];
    this.patient.observation = patient["observation"];

    if(patient["manual_domain"] == "canhoto") {
      this.patient.manual_domain = "Mão Esquerda";
    } else {
      this.patient.manual_domain = "Mão Direita";
    }

    this.patient.registry_number_pat = patient["registry_number"];
    this.patient.registry_number_acc = patient["registry_number"];
    
  }

  private formatInfo() {
    var patientJson = localStorage.getItem('actualPatient');
    var patient = JSON.parse(patientJson);

    var birthday = patient["date of birth"];
    var date = new Date(birthday.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))

    this.patient.date_of_birth = date.toLocaleDateString();

  }

  setAndFormat() {
    this.setPatientInfo();
    this.formatInfo();
  }

}
