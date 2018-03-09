import { Component, OnInit, OnDestroy, OnChanges, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy, OnChanges {
  @Output('onGoBack') public onGoBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() public modeChange:  EventEmitter<string> = new EventEmitter();

  @Input() set mode(mode: string) {
    this.modeValue = mode;
  }

  public modeValue: string;
  public formBuilder = new FormBuilder();
  public registerForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
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
    if (this.registerForm.valid) {
      // code here !
    } else {
      Object.keys(this.registerForm.controls).forEach((field) => {
        const control = this.registerForm.get(field);

        control.markAsTouched({ onlySelf: true });
      });

      this.registerForm.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
  }

  public goBack (): void {
    this.registerForm.reset();

    this.modeValue = 'login';

    this.onGoBack.emit(this.modeValue);
    this.modeChange.emit(this.modeValue);
  }
}
