import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReportService } from '../../../services/report/report.service';
import { PatientService } from '../../../services/patient/patient.service';
import { UserService } from '../../../services/psychologist/psychologist.service';
import { Report, Psychologist } from '../../../models/index';
import { Patient } from '../../../models/index';

import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {first} from "rxjs/operators";
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { load } from '@angular/core/src/render3';

declare var $: any;

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss'],
  providers: [ReportService, PatientService],
})
export class EditReportComponent implements OnInit {

  @ViewChild('formReport') formReport: NgForm;
  report: Report;
  patient: any;
  user: any;
  http: any;
  crp: string;

  constructor(
    private reportService: ReportService,
    private patientService: PatientService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  id: string;
  id_patient: string;

  ngOnInit() {
    this.userService.getPsychologistData(localStorage.getItem('crp'))
    .subscribe(
      (data: any) => {
        this.user = data;            
      });
    this.id = this.route.snapshot.paramMap.get('id');
    this.report = new Report();
    this.crp = localStorage.getItem('crp');
    this.id_patient = this.route.snapshot.paramMap.get('id_patient');

    this.reportService.getReportInfo(this.route.snapshot.paramMap.get('id')) 
    .subscribe((data: any) => {
      data =
      this.report = data;
      console.log(JSON.stringify(this.report));
      this.patientService.getPatientInfo(this.route.snapshot.paramMap.get('id_patient'))
      .subscribe((res: any) => {
        res.birthDate = res.birthDate.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3");
        this.patient = res;
      });
    });    

    //window.print();

   // $('#summernote').summernote();    
    $(".check-icon").hide();
  }


  testando() {
    console.log(this.report);
  }

  initSubmit(){
      if($(".check-icon").show()){
       
      }
      else{
      $(".check-icon").hide();
      setTimeout(function () {
        $(".check-icon").show();
      }, 10);
    }
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

  onSubmit(f: NgForm){
   $(this).addClass('out');
   $('body').removeClass('modal-active');
   console.log(this.id);
   return this.reportService.editReport(f, this.id)
   .add(
     (data: any) => {data =
     console.log(data);
      this.load();
     });
  }

  load() {
    location.reload()
  }
}
