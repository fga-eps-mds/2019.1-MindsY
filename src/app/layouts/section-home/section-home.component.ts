import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent implements OnInit {
  title = 'mindsy';

  constructor() { }

  ngOnInit() {
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



      function updateValue() {

          $('#count').html(Math.floor(Math.random() * (1000 - 1)) + 1);
          $('#count').each(function() {

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

      //line
      var canvas : any = document.getElementById("lineChart");
      var ctxL = canvas.getContext('2d');
      var myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abriu", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro","Dezembro"],
          datasets: [{
              label: "Depressão Clínica",
              data: [65, 59, 80, 81, 56, 55, 40, 22, 12, 20, 55, 3],
              backgroundColor: [
                'rgba(105, 0, 132, .2)',
              ],
              borderColor: [
                'rgba(200, 99, 132, .7)',
              ],
              borderWidth: 2
            },
            {
              label: "Transtorno Bipolar",
              data: [28, 48, 40, 19, 86, 27, 90,33, 21, 23,35, 7],
              backgroundColor: [
                'rgba(0, 137, 132, .2)',
              ],
              borderColor: [
                'rgba(0, 10, 130, .7)',
              ],
              borderWidth: 2
            },
            {
              label: "Esquizofrenia",
              data: [11, 33, 21, 3, 6,7, 9, 33, 52, 60, 22, 52],
              backgroundColor: [
                'rgba(92.5, 47.5, 0, .2)',
              ],
              borderColor: [
                'rgba(92.5, 47.5, 0, .7)',
              ],
              borderWidth: 2
            },
            {
              label: "Doença EXTRA...",
              data: [1, ,2 ,3 ,4 ,5 ,6 ,7, 8, 9, 10, 11, 12],
              backgroundColor: [
                'rgba(13.3, 77.3, 0, .2)',
              ],
              borderColor: [
                'rgba(13.3, 77.3, 0, .7)',
              ],
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true
        }
      });


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
  }
