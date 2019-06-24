import { Component, OnInit } from '@angular/core';
import { Report, Patient } from 'src/app/models/index';
import { ReportService } from 'src/app/services';
import { PatientService } from 'src/app/services';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DatePipe } from  '@angular/common';

declare var $: any;

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {

  name: string;
  id: string;

  constructor(
    private reportService: ReportService,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    }
  public report: Report = new Report;
  patient: any;
  crp = localStorage.getItem('crp');

  pipe = new DatePipe('en-US');
  today = Date.now();
  
  ngOnInit() 
  {
    var crp = localStorage.getItem('crp');
    this.id = this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientInfo(this.route.snapshot.paramMap.get('id'))
    .subscribe((data: any) => {
      data.birthDate = data.birthDate.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3");
      this.patient = data;
    });
  }

  register() {
    
    this.reportService.createReport(this.report, this.id, this.crp)
    .subscribe(
      (data: any) => 
      {
        console.log(data);
      });
    this.router.navigate(['/load-patient/' + this.id]);
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



}
