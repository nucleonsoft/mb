import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ApiService} from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loginUserData: object = {};
  username;
  password;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,
              private http: HttpClientModule) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => {
                  return false;
               };
              }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  loginUser() {
    this.submitted = true;
    this.api.login(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        if (this.loginForm.valid) {
          this.loginForm.reset();
          console.log(this.loginForm.value);
        }
        sessionStorage.setItem('token', res.token);
        localStorage.setItem('name', res.name);
        localStorage.setItem('username', res.username);
        localStorage.setItem('email', res.email);
        localStorage.setItem('mobile', res.mobile);
        localStorage.setItem('public_id', res.public_id);
        this.router.navigated = false;
        this.router.navigate(['/profile']);
      },
    );
  }
}
