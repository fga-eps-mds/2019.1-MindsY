import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Psychologist } from 'src/app/models';
import { AuthenticationService, UserService } from 'src/app/services/index';

@Component({
  selector: 'app-section-profile',
  templateUrl: './section-profile.component.html',
  styleUrls: ['./section-profile.component.css']
})
export class SectionProfileComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
    ) { }

  currentUser: Psychologist;

  ngOnInit() {
    var crp = localStorage.getItem('crp'); 
    this.userService.getPsychologistData(localStorage.getItem('crp'))
    .subscribe(
      (data: any) => {
        this.currentUser = data;
        console.log(this.currentUser);
      });
  }

}
