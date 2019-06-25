import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services';

import {Component, ViewChild, OnInit} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'mindsy';
  login = null;

  isLoggedin: boolean;

  constructor(private router: Router){}

  ngOnInit(){
    if(!localStorage.hasOwnProperty('crp')) {
      this.router.navigate(['/login'])
    }
  }

  
}
