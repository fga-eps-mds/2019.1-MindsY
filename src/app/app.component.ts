import {Component, ViewChild, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'mindsy';
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;

  ngOnInit(){
    this.dtOptions = {"columnDefs": [{ 
      "pagingType": "full_numbers"
   }]};    
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable(this.dtOptions);
  }

  
}
