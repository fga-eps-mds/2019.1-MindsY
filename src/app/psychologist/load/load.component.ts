import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService, UserService } from 'src/app/services';
import { del } from 'selenium-webdriver/http';
import { delay } from 'q';
import { Patient } from 'src/app/models';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class HomeLoadComponent implements OnInit {

  newURL: string;
  currentUser: any;

  constructor(
    private patientService: PatientService,
    private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    var crp = localStorage.getItem('crp'); 
    this.userService.getPsychologistData(localStorage.getItem('crp'))
    .subscribe(
      (data: any) => {
        this.currentUser = data;
        localStorage.setItem('loggedIn', 'true');
      });
    
    this.reload();
  }

  async reload() {
    await this.delay(3000);
    this.newURL = '/';
    this.router.navigate([this.newURL]);
  }


  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

}
