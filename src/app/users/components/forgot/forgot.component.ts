import { Component, OnInit, OnDestroy, OnChanges, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit, OnDestroy, OnChanges {
  @Input('mode') public mode: string;
  @Output('onGoBack') public onGoBack: EventEmitter<string> = new EventEmitter<string>();

  public formBuilder = new FormBuilder();
  public forgotForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]]
  });

  public constructor () {
    console.log('Constructor');
  }

  public ngOnInit (): void {
    console.log('OnInit');
  }

  public ngOnDestroy (): void {
    // code here !
    console.log('OnDestroy');
  }

  public ngOnChanges (change: SimpleChanges): void {
    console.log(change, 'OnChanges');
  }

  public submitForgot (form: any): void {
    if (this.forgotForm.valid) {
      // code here !
    } else {
      Object.keys(this.forgotForm.controls).forEach((field) => {
        const control = this.forgotForm.get(field);

        control.markAsTouched({ onlySelf: true });
      });

      this.forgotForm.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
  }

  public goBack (): void {
    this.forgotForm.reset();
    this.mode = 'login';
    this.onGoBack.emit('login');
  }
}
