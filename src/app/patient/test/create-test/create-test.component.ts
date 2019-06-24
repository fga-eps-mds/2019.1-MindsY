import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReportService } from '../../../services/report/report.service';
import { PatientService } from '../../../services/patient/patient.service';
import { TestService } from '../../../services/test/test.service';
import { Test, Patient } from '../../../models/index';
import { Result } from '../../../models/index';

import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private patientService: PatientService,
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  id: string;
  id_patient: string;
  patient: Patient;
  tests: any = [];
  actualTest: Test;
  public result: Result = new Result;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id_patient = this.route.snapshot.paramMap.get('id_patient');
    this.patientService.getPatientInfo(this.route.snapshot.paramMap.get('id_patient'))
    .subscribe(
      (data: any) => data=
      this.patient = data
    );
    this.setWiscListInfo();
  }

  
  changeTest(id: number){
    this.actualTest = this.tests[id - 1];
  }

  setWiscListInfo(){
    this.testService.getWiscSubTests()
    .subscribe(
      (data: any) => {        
        this.tests = data['tests'];
        console.log(this.tests);
      });
  }

  createReport(){
    console.log(this.result);
    this.testService.createResult(this.result,this.actualTest.id_test, this.id)
    .subscribe(
    (data: any) => 
      data = 
      console.log(data));
    this.router.navigate(['/load-patient/' + this.id_patient]);
  }

}
