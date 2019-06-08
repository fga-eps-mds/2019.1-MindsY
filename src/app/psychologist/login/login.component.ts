import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/psychologist/psychologist.service';
import { Login } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  loginObject: Login = new Login();

  ngOnInit() {}

  login() {
    this.loginObject.crp = '1234561';
    this.loginObject.password = 'Deusefiel7';

    this.userService.login(this.loginObject)
    .subscribe((data: any) => data =
      console.log(data)
    );
  }
}
