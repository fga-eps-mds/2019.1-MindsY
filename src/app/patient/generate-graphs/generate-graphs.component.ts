import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { PatientService } from 'src/app/services/index';
import { ReportService } from 'src/app/services/index';
import { Patient } from 'src/app/models/index';

import Chart from 'chart.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-generate-graphs',
  templateUrl: './generate-graphs.component.html',
  styleUrls: ['./generate-graphs.component.css']
})
export class GenerateGraphsComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private reportService: ReportService,
    private route: ActivatedRoute
  ) { }
  
  executivo_cScore: any = [];
  bgExecutivo: any = [];
  borderExecutivo: any = [];

  verbal_cScore: any = [];
  bgVerbal: any = [];
  borderVerbal: any = [];

  considerate_score: any = [];
  labels: any = [];

  patients: any = [];
  reports: any = [];

  ngOnInit() {
  
  this.loadAllPatients();

  }

  private loadAllPatients() {
    this.patientService.getAllPatients(localStorage.getItem('crp'))
    .subscribe(
      (res) => {
        this.patients = res;
        //console.log(res);
      });
  }

  getReports(id_patient: string){
    if(id_patient == "-1"){
      this.reports = [];
    }
    else{
      this.reportService.getReportsPatient(localStorage.getItem('crp'), id_patient)
      .subscribe(
        (res) => {
          this.reports = res;
          //console.log(res);
          localStorage.setItem('reports', JSON.stringify(res));
          this.setReportInfo();
        });
    }
  }

  private setReportInfo()
  {
    var reportJson = localStorage.getItem('reports');
    var reports = JSON.parse(reportJson);
    //console.log(reportJson);
  }



  initLineGraph(){
    // //line
    // var canvas2 : any = document.getElementById("lineChartTest");
    // var ctxL2 = canvas2.getContext('2d');
    // var myLineChart2 = new Chart(ctxL2, {
    //   type: 'line',
    //   data: {
    //     labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    //     datasets: [{
    //         label: "Pacientes",
    //         data: [65, 59, 80, 81],
    //         backgroundColor: [
    //           'rgba(255, 228, 0, .6)',
    //         ],
    //         borderColor: [
    //           'rgba(100, 89.4, 0, .7)',
    //         ],
    //         borderWidth: 2
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true
    //   }
    // });
  }

  getResultValues(id_evaluation: string){
    this.reportService.loadResultValues(id_evaluation)
    .subscribe(
      (data: any) => {
        //console.log(data);
        if(data['results'].length < 1){
          this.emptyGraph();
          this.executivo_cScore= [];
          this.bgExecutivo= [];
          this.borderExecutivo= [];

          this.verbal_cScore = [];
          this.bgVerbal = [];
          this.borderVerbal= [];

          this.considerate_score= [];
          this.labels= [];
          this.initColumGraph(this.labels,this.executivo_cScore,this.verbal_cScore,this.bgExecutivo, this.borderExecutivo,this.bgVerbal, this.borderVerbal );
      
        }
        else{
          this.emptyGraph();
          this.executivo_cScore= [];
          this.bgExecutivo= [];
          this.borderExecutivo= [];

          this.verbal_cScore = [];
          this.bgVerbal = [];
          this.borderVerbal= [];

          this.considerate_score= [];
          this.labels= [];

          console.log("TA CHEIO");
            var j =1;
            this.executivo_cScore[0] = 0;

            var k = 1;
            this.verbal_cScore[0] = 0;
            console.log(data);
          for (var i = 0; i < data['results'].length; i++) {
            if(data['results'][i]['tests']['type'].toString() == "executivo"){
              this.executivo_cScore[i] = data['results'][i]['considerate_score'];
              this.verbal_cScore[i] = 0;
            }
            else{
              this.verbal_cScore[i] = data['results'][i]['considerate_score'];
              this.executivo_cScore[i] = 0;
            }
            this.labels[i] = data['results'][i]['tests']['name'].toString();
            console.log(this.labels[i]);
            console.log(this.considerate_score[i]);
            
          }


          var j =1;
          this.bgExecutivo[0] = 'rgba(105, 0, 132, .2)';
          this.borderExecutivo[0] = 'rgba(200, 99, 132, .7)';

          var k = 1;
          this.bgVerbal[0] = 'rgba(0, 137, 132, .2)';
          this.borderVerbal[0] = 'rgba(0, 10, 130, .7)';

          for (var i = 0; i < data['results'].length; i++) {

              this.bgExecutivo[i] = 'rgba(105, 0, 132, .2)';
              this.borderExecutivo[i] = 'rgba(200, 99, 132, .7)';

              this.bgVerbal[i] = 'rgba(0, 137, 132, .2)';
              this.borderVerbal[i] = 'rgba(0, 10, 130, .7)';
            
          }
          
          this.initColumGraph(this.labels,this.executivo_cScore,this.verbal_cScore,this.bgExecutivo, this.borderExecutivo,this.bgVerbal, this.borderVerbal );
      }
    });
  }


  emptyGraph(){

    $('#lineChart').remove(); // this is my <canvas> element
    $('#chartAnchor').append('<canvas id="lineChart"></canvas>');                      
    var canvas : any = document.getElementById("lineChart");
    var ctxL = canvas.getContext('2d');
    var myLineChart = new Chart(ctxL, {
      type: 'bar',
      data: {
        labels: ["Vazio"],
        datasets: [{
            label: "Executivo",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 2
          },
          {
            label: "Verbal",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  initColumGraph(labels: any[], considerate_scoreExecutive: number[], considerate_scoreVerbal: number[], bgExecutivo: any[], borderExecutivo: any[], bgVerbal: any[], borderVerbal: any[]){
    console.log(labels);
    $('#lineChart').remove(); // this is my <canvas> element
    $('#chartAnchor').append('<canvas id="lineChart"></canvas>');  
    var canvas : any = document.getElementById("lineChart");
    var ctxL = canvas.getContext('2d');
    var myLineChart = new Chart(ctxL, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
            label: "Executivo",
            data: considerate_scoreExecutive,
            backgroundColor: bgExecutivo,
            borderColor: borderExecutivo,
            borderWidth: 2
          },
          {
            label: "Verbal",
            data: considerate_scoreVerbal,
            backgroundColor: bgVerbal,
            borderColor: borderVerbal,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true
      }
    });

  }

}
