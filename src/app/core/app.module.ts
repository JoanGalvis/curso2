import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { UsersModule } from './../users/users.module';
import { DashboardModule } from './../dashboard/dashboard.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './../users/user.module#UserModule',
  },
  {
    path: 'dashboard',
    loadChildren: './../dashboard/dashboard.module#DashboardModule',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes),
    UsersModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
