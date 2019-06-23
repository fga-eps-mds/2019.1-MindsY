import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services';
import { del } from 'selenium-webdriver/http';
import { delay } from 'q';
import { Patient } from 'src/app/models';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  id: string;
  newURL: string;

  constructor(
    private patientService: PatientService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPatientInfo(this.id);
    this.reload();
  }

  async reload() {
    await this.delay(2000);
    this.newURL = '/edit-patient/' + this.id;
    this.router.navigate([this.newURL]);
  }

  private getPatientInfo(id: string) {
    this.patientService.getPatientInfo(this.id)
    .subscribe(
      result => {
        localStorage.setItem('actualPatient', JSON.stringify(result));
        console.log(result);
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
