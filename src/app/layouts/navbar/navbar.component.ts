import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services';

import { Psychologist } from 'src/app/models';
import { AuthenticationService, UserService } from 'src/app/services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  currentUser: any;
  crp = localStorage.getItem('crp');
  currentUserSubscription: Subscription;
  users: Psychologist[] = [];

  userString: string;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { 
      this.currentUserSubscription = this.authenticationService.currentUser
        .subscribe
        (user => {
          this.currentUser = user;
        });
  }


  ngOnInit() {
    var crp = localStorage.getItem('crp'); 
    this.userService.getPsychologistData(localStorage.getItem('crp'))
    .subscribe(
      (data: any) => {
        this.currentUser = data;
        
      });
    console.log(crp);
  }
  
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    /*
      unsubscribe to ensure no memory leaks
    */ 
    this.currentUserSubscription.unsubscribe();
  }

}
