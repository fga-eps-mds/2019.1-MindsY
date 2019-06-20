import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Psychologist } from 'src/app/models';
import { AuthenticationService, UserService } from 'src/app/services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  currentUser: Psychologist;
  currentUserSubscription: Subscription;
  users: Psychologist[] = [];

  userString: string;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { 
      this.currentUserSubscription = this.authenticationService.currentUser
        .subscribe
        (user => {
          this.currentUser = user;
        });
  }


  ngOnInit() {
    var crp = localStorage.getItem('crp'); 
    console.log(crp);
    // this.currentUser = this.userService.getPsychologistInfo(crp);
  }

  ngOnDestroy() {
    /*
      unsubscribe to ensure no memory leaks
    */ 
    this.currentUserSubscription.unsubscribe();
  }

}
