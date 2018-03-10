import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
