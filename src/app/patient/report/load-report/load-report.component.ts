import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services';
import { delay } from 'q';
import { Report } from 'src/app/models';

@Component({
  selector: 'app-load-report',
  templateUrl: './load-report.component.html',
  styleUrls: ['./load-report.component.css']
})
export class LoadReportComponent implements OnInit {
  id: string;
  newURL: string;

  constructor(
    private reportService: ReportService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getReportInfo(this.id);
    this.reload();
  }

  async reload() {
    await this.delay(2000);
    this.newURL = '/edit-patient/' + this.id; 
    this.router.navigate([this.newURL]);
  }

  private getReportInfo(id: string) {
    this.reportService.getReportInfo(this.id)
    .subscribe(
      result => {
        localStorage.setItem('actualPatient', JSON.stringify(result));
        console.log(result)
      });
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
}
