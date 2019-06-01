import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Paciente';
    //var HTMLstring = '<div><p style="text-align:center"><b>Hello, world</b></p><p>Meu nome é: '+ this.name +'</p></div>';
//Essa linha de baixo quebra alguns testes
    // $('#summernote').summernote({
    //   height: 2500

    // });

  }

}
