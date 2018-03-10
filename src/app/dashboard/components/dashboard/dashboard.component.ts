import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public username: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.username = this._route.snapshot.paramMap.get('username');
  }

}
