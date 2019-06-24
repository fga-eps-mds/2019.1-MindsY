import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { PatientService } from 'src/app/services/index';
import { ReportService } from 'src/app/services/index';
import { Patient } from 'src/app/models/index';


@Component({
  selector: 'app-editpacient',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditPacientComponent implements OnInit {

  reload = true;
  patient: Patient = new Patient;
  constructor (
    private patientService: PatientService,
    private reportService: ReportService,
    private route: ActivatedRoute
  ) { }
  
  reports: any = [];
  id: string;
  columns: string[];
  reportIds: any = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setAndFormat();
    this.loadAllReports();
    

  }

  ngOnDestroy() {
    localStorage.removeItem('actualPatient');
    localStorage.removeItem('reports');
  }

  private loadAllReports() {
    this.reportService.getReportsPatient(localStorage.getItem('crp'), this.route.snapshot.paramMap.get('id'))
    .subscribe(
      (res) => {
        this.reports = res;
        console.log(res);
        localStorage.setItem('reports', JSON.stringify(res));
        this.setReportInfo();
        this.reportIds = JSON.parse(localStorage.getItem('reports'));
      });
  }

  private setReportInfo()
  {
    var reportJson = localStorage.getItem('reports');
    var reports = JSON.parse(reportJson);
    console.log(reportJson);
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
    this.patient.kinship_degree = patient["kinshipDegree"];
    this.patient.number = patient["phone"][0]["phoneNumber"];
    this.patient.scholarity = patient["scholarity"];
    this.patient.observation = patient["observation"];

    if(patient["manualDomain"] == "canhoto") {
      this.patient.manual_domain = "Mão Esquerda";
    } else {
      this.patient.manual_domain = "Mão Direita";
    }

    this.patient.registry_number_pat = patient["registryNumberAcc"];
    this.patient.registry_number_acc = patient["registryNumberPat"];
    
  }

  private formatInfo() {
    var patientJson = localStorage.getItem('actualPatient');
    var patient = JSON.parse(patientJson);

    var birthday = patient["birthDate"];
    var date = new Date(birthday.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))

    this.patient.date_of_birth = date.toLocaleDateString();

  }

  setAndFormat() {
    this.setPatientInfo();
    this.formatInfo();
  }

  showPopupModal(){
    var modal2 = document.getElementById('myModal_piso');
  
    // Get the button that opens the modal

    // When the user clicks the button, open the modal
      modal2.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    
  }

  closePopupModal(){
    var modal2 = document.getElementById('myModal_piso');
  
    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn_piso");
  
    // Get the <span> element that closes the modal
    var span2 = document.getElementById("piso");

      modal2.style.display = "none";
    
  }


  closeModal(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  }

}
