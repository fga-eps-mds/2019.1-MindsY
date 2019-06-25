import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import Chart from 'chart.js';
import * as $ from 'jquery';

import { Psychologist } from 'src/app/models';
import { UserService, AuthenticationService, PatientService } from 'src/app/services/index';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent implements OnInit {

  title = 'mindsy';
  currentUser: any;
  currentUserSubscription: Subscription;
  users: Psychologist[] = [];
  patientListNumber: number;

  constructor(
    private authenticationService: AuthenticationService,
    private patientService: PatientService
  ) { 
      this.currentUserSubscription = this.authenticationService.currentUser
        .subscribe(user => {
          this.currentUser = user;
        });
  }

  ngOnInit() {

    // this.patientService.getAllPatients(localStorage.getItem('crp'))
    // .subscribe(
    //   (data: any) => {
    //       //this.patientListNumber = data.length;
    //       console.log(data); 
    //   });

    this.count();
    this.initGraph();

    }


  initGraph() {
    //line
    var canvas2 : any = document.getElementById("lineChartTest");
    var ctxL2 = canvas2.getContext('2d');
    var myLineChart2 = new Chart(ctxL2, {
      type: 'line',
      data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{
            label: "Pacientes",
            data: [65, 59, 80, 81],
            backgroundColor: [
              'rgba(255, 228, 0, .6)',
            ],
            borderColor: [
              'rgba(100, 89.4, 0, .7)',
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  count(){
    $('.count').each(function() {
      $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function(now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
  }
  ngOnDestroy() {
      /*
        unsubscribe to ensure no memory leaks
      */ 
      this.currentUserSubscription.unsubscribe();
  }

  }
