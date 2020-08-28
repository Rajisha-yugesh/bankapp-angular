import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'//../ means ,now we are in login page , one step back ,next folder path no need of extension

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  acno="";//sync whatever we type in view,we will get that
  pwd="";

  constructor(private router:Router,
    private dataservice : DataService) { }

  ngOnInit(): void {
  }

 
  login() {
    var acno = parseInt(this.acno);//convert string to number
    var password = this.pwd;
    alert(acno + "," + password)
    var details = this.dataservice.accountDetails;

    if (acno in details) {
      let pwd = details[acno].password//var==let
      if (pwd == password) {
        // alert("successful login")
        // window.location.href = "user.html"
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("password incorrect")

      }
    }
    else {
      alert("account number doesnt exist")
    }

  }

}
