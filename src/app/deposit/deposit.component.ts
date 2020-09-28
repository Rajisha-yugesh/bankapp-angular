import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  depositForm = this.fb.group({

    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern("^[0-9]*$")]],
    pin: ['', [Validators.required]],
    amount: ['', [Validators.required]],

  })
  name ="";



  constructor(private dataservice: DataService,
    private fb: FormBuilder) {this.name = localStorage.getItem("name") }

  ngOnInit(): void {
  }
  getError(field) {
    return (this.depositForm.get(field).touched || this.depositForm.get(field).dirty) && this.depositForm.get(field).errors
  }
  deposit() {
    if (this.depositForm.valid) {
      this.dataservice.deposit(this.depositForm.value.acno, this.depositForm.value.pin, this.depositForm.value.amount)
    .subscribe((result:any)=>{
      alert(result.message);
      alert(result.balance)
    },result =>{
      alert(result.error.message)
    })
  }
      //   if (result.status==true) {
    //     alert(result.message)
    //     alert(result.balance)


    //   }
    //   else {
    //     alert(result.message)
       
    //   }
    // }
    // else {
    //   alert("form is invalid")

    // }



  }


}



