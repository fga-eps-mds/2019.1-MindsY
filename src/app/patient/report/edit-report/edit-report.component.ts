import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReportService } from '../../../services/report/report.service';
import { Report } from '../../../models/index';


@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css'],
  providers: [ReportService],
})
export class EditReportComponent implements OnInit {

  @ViewChild('formReport') formReport: NgForm;
  report: Report;
  anamnese: string;
  id: Number;
  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    //this.report = this.reportService
  }


  updateUser(): void {
    this.reportService.updateReport(this.report, this.id)
      .subscribe(
        result => {
          const user = JSON.stringify(this.report);
          localStorage.setItem('userData', user);
          console.clear();
        }
      );
  }





}
