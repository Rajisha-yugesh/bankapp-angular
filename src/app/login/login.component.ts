import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails = {
    1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
    1002: { name: "user2", acno: 1002, pin: 4388, password: "usertwo", balance: 4000 },
    1003: { name: "user3", acno: 1003, pin: 4287, password: "userthree", balance: 2000 },
    1004: { name: "user4", acno: 1004, pin: 1388, password: "userfour", balance: 1000 },
    1005: { name: "user5", acno: 1005, pin: 1318, password: "userfive", balance: 1500 }


  }
  acno="";//sync whatever we type in view,we will get that
  pwd="";

  constructor() { }

  ngOnInit(): void {
  }

 
  login() {
    var acno = parseInt(this.acno);//convert string to number
    var password = this.pwd;
    alert(acno + "," + password)
    var details = this.accountDetails;

    if (acno in details) {
      let pwd = details[acno].password//var==let
      if (pwd == password) {
        // alert("successful login")
        window.location.href = "user.html"
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
