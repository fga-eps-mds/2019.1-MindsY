import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReportService } from '../../../services/report/report.service';
import { Report } from '../../../models/index';

import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {first} from "rxjs/operators";
import { Router,NavigationEnd } from '@angular/router';
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
    private router: Router
  ) { 
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.functionSummernote();
      }
   });
  }

  ngAfterViewInit() {
    this.functionSummernote();
  }

  ngOnInit() {    
    

    this.reportService.getReport(1) 
    .subscribe((data: any) => data =
      this.report = data
    );    

    //window.print();

   // $('#summernote').summernote();    
    $(".check-icon").hide();
  }

  functionSummernote(){
    var markupStr = this.report.anamnese.toString(); 
    // $('.note-editable #anamnese').html('<textarea ngModel name="anamnese" #anamnese="ngModel" cols="30" rows="10" >'+ markupStr +'</textarea>');
  }

  initSubmit(nik){
      if($(".check-icon").show()){
        // $("textarea").each(function(){
        //   console.log("VALOR DO TEXT AREA: " + $.trim($(this).val().substring(1, $(this).val().length - 1)));
        //   console.log("VALOR DO REPORT ANAMNESE: " + nik.substring(1, this.anamnese_length));
        //   if($.trim($(this).val().substring(0, $(this).val().length)) == nik.substring(0, this.anamnese_length)){
        //     $(".check-icon").hide();
        //   }
          
        // });
      }
      else{
      $(".check-icon").hide();
      setTimeout(function () {
        $(".check-icon").show();
      }, 10);
    }
  }

  initModal(){

    // alert('The paragraph was clicked<br><button class="btn btn-primary" value="Atualizar">Atualizar</button>');
    $('#dialog_id').dialog();
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
    
   this.load();
   return this.reportService.updateReport(f)
   .add(
     (data: any) => data =
     console.log(data)
   );
  }

  load() {
    location.reload()
  }


}
