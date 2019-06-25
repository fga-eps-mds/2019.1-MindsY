import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService, AlertService } from 'src/app/services/index'; 
import { Psychologist } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  psychologist: Psychologist;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = 0;

  constructor (
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    /*
      redirect to home if already logged in 
    */

    if(this.authenticationService.currentUserValue) {
      this.router.navigate(['/loading-home']);
    }

   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      crp: ['', Validators.required],
      password: ['', Validators.required]
    });

    /*
      get return url from route parameters or default to '/'
     */

     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/loading-home';
  }

  /* 
    convenience getter for easy access to form fields
  */
  get f() {
    return this.loginForm.controls;
  } 

  onSubmit() {
    this.submitted = true;

    /*
      stop here if form is invalid
    */
    if(this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.crp.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('crp', this.f.crp.value);
          localStorage.setItem('token', data['access_token']);
          this.alertService.success('Login Efetuado com Sucesso!');
          this.router.navigate([this.returnUrl]);
        },
        error => {
          if(error.status != '201') {
            this.alertService.error('Algo deu errado!');
            error = 1;
          }
          this.loading = false;
        });
  }
}