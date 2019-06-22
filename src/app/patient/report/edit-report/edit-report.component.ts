import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReportService } from '../../../services/report/report.service';
import { Report } from '../../../models/index';

import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {first} from "rxjs/operators";
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { load } from '@angular/core/src/render3';

declare var $: any;

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss'],
  providers: [ReportService],
})
export class EditReportComponent implements OnInit {

  @ViewChild('formReport') formReport: NgForm;
  report: Report;
  http: any;

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.report = new Report();

    this.reportService.getReportInfo(this.route.snapshot.paramMap.get('id')) 
    .subscribe((data: any) => data =
      this.report = data
    );    

    //window.print();

   // $('#summernote').summernote();    
    $(".check-icon").hide();
  }




  initSubmit(){
      if($(".check-icon").show()){
       
      }
      else{
      $(".check-icon").hide();
      setTimeout(function () {
        $(".check-icon").show();
      }, 10);
    }
  }

  showPopupModal(){
    var modal2 = document.getElementById('myModal_piso');
  
    // Get the button that opens the modal

    // When the user clicks the button, open the modal
      modal2.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    
  }

  closePopupModal(){
    var modal2 = document.getElementById('myModal_piso');
  
    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn_piso");
  
    // Get the <span> element that closes the modal
    var span2 = document.getElementById("piso");

      modal2.style.display = "none";
    
  }


  closeModal(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  }

  onSubmit(f: NgForm){
   $(this).addClass('out');
   $('body').removeClass('modal-active');
   console.log(this.id);
   return this.reportService.editReport(f, this.id)
   .add(
     (data: any) => {data =
     console.log(data);
      this.load();
     });
  }

  load() {
    location.reload()
  }
}
