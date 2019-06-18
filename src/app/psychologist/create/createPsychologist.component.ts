import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/psychologist/psychologist.service';
import { Psychologist } from 'src/app/models/index';

@Component({
  selector: 'app-create',
  templateUrl: './createPsychologist.component.html',
  styleUrls: ['./createPsychologist.component.css']
})
export class CreatePsychologistComponent implements OnInit {

  public psychologist: Psychologist = new Psychologist();

  constructor(
    private userService: UserService,
    private route: Router) { }

  ngOnInit() {}

  register() {
    this.userService.createPsychologist(this.psychologist)
    .subscribe((data: any) => data =
      this.registerSuccess(data)
    );
  }

  registerSuccess(data: any) {
    console.log(data);
    this.route.navigate(['/login']);
  }

}
