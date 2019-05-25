import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PatientService } from 'src/app/services/index';
import { Patient } from 'src/app/models';

import * as $ from 'jquery';
//import 'datatables.net'

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})

export class ListPatientsComponent implements OnInit {

  patients: Patient[];
  columns: string[];

  //@ViewChild('dataTable') table;
  //dataTable: any;

  constructor(private patientService: PatientService, private chRef: ChangeDetectorRef) { }

  template:`
    ASsafsdf
    asfdasdf
    asdfa
    sdfas
    fasf
  `

  ngOnInit() {

    //TODO: Pegar is do psicólogo que está logado.
    this.patients = this.patientService.getAllPatients('01-122454');
    this.columns = ['name', 'registry_number_pat', 'number'];

    //this.dataTable = $(this.table.nativeElement);
    //this.dataTable.DataTable();

  }



}
