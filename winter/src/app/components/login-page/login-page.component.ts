import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  title = 'Login Page - Welcome';

  _loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm(){
    this._loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      isRemember: [false]
    });
  }

  signIn(){
    if (this._loginForm.valid){
      this._router.navigate(['/home']);
    }else {
      console.log('Form değerleri geçerli değil.')
    }
  }


}
