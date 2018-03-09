import { Component, OnInit, OnDestroy, OnChanges, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit, OnDestroy, OnChanges {
  @Output('onGoBack') public onGoBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() public modeChange:  EventEmitter<string> = new EventEmitter();

  public modeValue: string;
  public formBuilder = new FormBuilder();
  public forgotForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(6)]]
  });

  public interval: Observable<any>;
  public subs: Subscription;
  public time: any;

  @Input() set mode(mode: string) {
    this.modeValue = mode;
  }

  public constructor () {
    console.log('Constructor');
  }

  public ngOnInit (): void {
    console.log('OnInit');
    this.interval = Observable.create((data: any) => {
      this.time = setInterval(() => {
        console.log('Interval');
      }, 1000);
    });

    this.subs = this.interval.subscribe((data: any) => {
      this.time = setInterval(() => {
        console.log('Interval');
      }, 1000);
    });
  }

  public ngOnDestroy (): void {
    // code here !
    console.log('OnDestroy');
    console.log(this.subs);
    this.subs.unsubscribe();
    clearInterval(this.time);
    console.log(this.subs);
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

    this.modeValue = 'login';

    this.onGoBack.emit(this.modeValue);
    this.modeChange.emit(this.modeValue);
  }
}
