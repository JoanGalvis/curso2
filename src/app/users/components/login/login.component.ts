import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsernamePipe } from './../../../core/pipes/username.pipe';

import { ForgotComponent } from '../forgot/forgot.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, OnChanges {
  public formBuilder = new FormBuilder();
  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(8), (control: FormControl) => {
      if (control.value && control.value.length > 12) {
        return {
          maxLength: {
            value: control.value,
            message: 'Error maximo de longitud.'
          }
        };
      } else {
        return null;
      }
    }]]
  });
  public errors = [];
  public mode: string;
  public currentDate: Date = new Date();
  public uname: string;

  public constructor (
    private _route: Router
  ) {
    this.mode = 'login';

    console.log('Constructor');
  }

  public ngOnInit (): void  {
    // code here !
    console.log('OnInit');
  }

  public ngOnDestroy(): void {
    // code here !
    console.log('OnDestroy');
  }

  public ngOnChanges(change: SimpleChanges): void {
    // code here !
    console.log(change, 'OnChanges');
  }

  public submitLogin(form): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;

      this._route.navigate(['/dashboard', { username: username }]);
    } else {
      Object.keys(this.loginForm.controls).forEach((field) => {
        const control = this.loginForm.get(field);

        control.markAsTouched({ onlySelf: true });
      });

      this.loginForm.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
  }

  public changeMode (data: any): void {
    this.mode = data;
    this.loginForm.reset();
  }

  public onBlurUsername (): void {
    console.log('onBlurUsername');
  }

  public onChangeUsername (): void {
    console.log('onChangeUsername');
  }

  public onFocusUsername (): void {
    console.log('onFocusUsername');
  }
}
