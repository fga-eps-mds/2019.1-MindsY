import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Login } from 'src/app/models';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private route: Router
    ) { }

  loginObject: Login = new Login();

  ngOnInit() {}

  login() {
    this.loginService.login(this.loginObject)
    .subscribe((data: any) => data =
      console.log(data)
    );
    this.route.navigate(['/']);
  }
}
