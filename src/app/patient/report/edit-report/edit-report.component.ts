import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReportService } from '../../../services/report/report.service';
import { Report } from '../../../models/index';

import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {first} from "rxjs/operators";
import { Router,NavigationEnd } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css'],
  providers: [ReportService],
})
export class EditReportComponent implements OnInit {

  @ViewChild('formReport') formReport: NgForm;
  report: Report;
  http: any;

  
  constructor(
    private reportService: ReportService,
    private router: Router
  ) { 
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.functionSummernote();
      }
   });
  }

  ngAfterViewInit() {
    this.functionSummernote();
  }

  ngOnInit() {    

    this.reportService.getReport(1) 
    .subscribe((data: any) => data =
      this.report = data
    );    
    
    $('#summernote').summernote();    

  }

  functionSummernote(){
    var markupStr = this.report.anamnese.toString(); 
    // $('.note-editable #anamnese').html('<textarea ngModel name="anamnese" #anamnese="ngModel" cols="30" rows="10" >'+ markupStr +'</textarea>');
  }

  onSubmit(f: NgForm){
   return this.reportService.updateReport(f)
   .add(
     (data: any) => data =
     console.log(data)
   );
  }


}
