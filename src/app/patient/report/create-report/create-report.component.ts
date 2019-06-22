import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/index';
import { ReportService } from 'src/app/services';

import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  name: string;

  constructor(
    private reportService: ReportService,
    private router: Router
    ) { }
  public report: Report = new Report;
  
  ngOnInit() {
  }

  register() {

    this.reportService.createReport(this.report)
    .subscribe(
      (data: any) => 
        data = 
        console.log(this.report));
        this.router.navigate(['/']);
  }





}
