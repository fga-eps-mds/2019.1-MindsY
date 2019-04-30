import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {}

  register() {
    console.log("***Register***");
    this.userService.createUser()
    .subscribe((data: any) => data =
      console.log("OKOK")
    );
  }

}
