import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service'//../ means ,now we are in login page , one step back ,next folder path no need of extension
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({

    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[0-9]*$")]],
    pwd: ['', [Validators.required]],

  })

  constructor(private router: Router,
    private dataservice: DataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  getError(field) {
    return (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) && this.loginForm.get(field).errors

  }
  login() {
    if (this.loginForm.valid) {
      this.dataservice.login(this.loginForm.value.acno, this.loginForm.value.pwd)
      .subscribe((data:any)=>{
        if(data){
          localStorage.setItem("name",data.name)
        alert("login successful")
        this.router.navigateByUrl("dashboard")
        } else {
          alert("invalid credentials")
        }

      },(data)=>{
        alert(data.error.message)
      })
  

      
     
    }
    else {
      alert("form is invalid")

    }
  }

  //     var acno = parseInt(this.loginForm.value.acno);//convert string to number
  //     var password = this.loginForm.value.pwd;
  //     alert(acno + "," + password)
  //     var details = this.dataservice.accountDetails;

  //     if (acno in details) {
  //       let pwd = details[acno].password//var==let
  //       if (pwd == password) {
  //         // alert("successful login")
  //         // window.location.href = "user.html"
  //        
  //       }
  //       else {
  //         alert("password incorrect")

  //       }
  //     }
  //     else {
  //       alert("account number doesnt exist")
  //     }

  //   }
  // }

}
