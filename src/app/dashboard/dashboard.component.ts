import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  router: any;

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  depositpage(){
    this.router.navigateByUrl("login")


  }
 withdrawpage(){
  this.router.navigateByUrl("dashboard")

  }

}

