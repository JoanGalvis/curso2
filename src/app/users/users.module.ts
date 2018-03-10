import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { DatePipe } from '@angular/common';
import { UsernamePipe } from './../core/pipes/username.pipe';

import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    DatePipe
  ],
  declarations: [LoginComponent, ForgotComponent, RegisterComponent, UsernamePipe]
})
export class UsersModule { }
