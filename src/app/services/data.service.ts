import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {
    1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
    1002: { name: "user2", acno: 1002, pin: 4388, password: "usertwo", balance: 4000 },
    1003: { name: "user3", acno: 1003, pin: 4287, password: "userthree", balance: 2000 },
    1004: { name: "user4", acno: 1004, pin: 1388, password: "userfour", balance: 1000 },
    1005: { name: "user5", acno: 1005, pin: 1318, password: "userfive", balance: 1500 }


  }
  currentUser;

  constructor() { }

  register(name,acno,pwd,pin){
    if(acno in this.accountDetails){
      alert("account number already exists, Please Login");
      return false;//i will move o register.ts register();
    }
    this.accountDetails[acno]={
      name,
      acno,
      pwd,
      pin,
      balance:0
    }
    console.log(this.accountDetails)
   return true;
  }
  login(acno1 ,paswrd){
    var acno=parseInt(acno1);
    var data=this.accountDetails;
    if(acno in data){
      var pwd = data[acno].password
      if(pwd ==paswrd){
        this.currentUser = data[acno];
        return true;
      }
    }
  }
}
