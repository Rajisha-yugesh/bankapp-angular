import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ;

  constructor(public dataService:DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  depositpage(){
    this.router.navigateByUrl("deposit")


  }
 withdrawpage(){
  this.router.navigateByUrl("withdraw")

  }

}

