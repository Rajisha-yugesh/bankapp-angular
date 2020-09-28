import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component';

const options ={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {
    1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000, transactions:[] },
    1002: { name: "user2", acno: 1002, pin: 4388, password: "usertwo", balance: 4000,transactions:[] },
    1003: { name: "user3", acno: 1003, pin: 4287, password: "userthree", balance: 2000,transactions:[] },
    1004: { name: "user4", acno: 1004, pin: 1388, password: "userfour", balance: 1000 ,transactions:[]},
    1005: { name: "user5", acno: 1005, pin: 1318, password: "userfive", balance: 1500,transactions:[] }


  }
  currentUser;

  transactions:[];


  constructor(private http:HttpClient) { this.getDetails() }
  

  saveDetails() {
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails));
    if(this.currentUser){
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }
  getDetails() {
    if(localStorage.getItem("accountDetails")){
    this.accountDetails = JSON.parse(localStorage.getItem("accountDetails"));
    }
    if(localStorage.getItem("currentUser")){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
    }
  }
  getTransactions(){
    return this.http.get("http://localhost:3000/transactions",options)
  }

  deleteTransactions(id){
    return this.http.delete("http://localhost:3000/transactions",options)
  }

  register(name, acno, pwd, pin) {
    const data = {
      name,
      acno,
      pwd,
      pin,
      balance: 0,
      Transactions:[]
    }
    return this.http.post("http://localhost:3000/register",data)
    // if (acno in this.accountDetails) {
    //   alert("account number already exists, Please Login");
    //   return false;//i will move o register.ts register();
    // }
  
    // console.log(this.accountDetails)
    // this.saveDetails();
    // return true;
  }
  login(acno1, paswrd) {
    var acno = parseInt(acno1);
   const data =
   {
     acno,
     password:paswrd
   }
   return this.http.post("http://localhost:3000/login",data,options)
  }
  deposit(acno, pin, amount1) {
    var amount = parseInt(amount1)

    const data =
    {
      acno,
      pin,
      
    }
    return this.http.post("http://localhost:3000/deposit",data,options)
    // var data = this.accountDetails;
    // if (acno in data) {
    //   let mpin = data[acno].pin

    //   if (pin == mpin) {
    //     data[acno].balance += amount;
    //     data[acno].transactions.push(
    //       {
    //         amount:amount,
    //         type:'credit'
    //       }
    //     )
    //     this.saveDetails();
    //     return {
    //       status: true,
    //       message: 'account has been credited',
    //       balance: data[acno].balance
    //     }

    //   }
    //   else {
    //     return {
    //       status: false,
    //       message: 'incorrect account details'

    //     }
    //   }
    // }


  }
  withdraw(acno1, pin1, amount1) {
    var amount = parseInt(amount1)

    const data =
    {
      acno:acno1,
      pin:pin1,
      
    }
    return this.http.post("http://localhost:3000/withdraw",data,options)
    // var data = this.accountDetails;
    // if (acno1 in data) {
    //   let mpin = data[acno1].pin

    //   if (pin1 == mpin) {
    //     data[acno1].balance -= amount;
    //     data[acno1].transactions.push(
    //       {
    //         amount:amount,
    //         type:'debit'
    //       }
    //     )
    //     this.saveDetails();
    //     return {
    //       status: true,
    //       message: 'account has been debited',
    //       balance: data[acno1].balance
    //     }

    //   }
    //   else {
    //     return {
    //       status: false,
    //       message: 'incorrect account details'

    //     }

    //   }
    // }


  }


}
